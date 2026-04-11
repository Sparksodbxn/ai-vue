<template>
  <div>
    <PageHead title="知识文章">
      <!-- #号是v-slot简写 -->
      <template #buttons>
        <el-button @click="handleEdit({})" type="primary">新增</el-button>
      </template>
    </PageHead>
    <TableSearch :formItem="formItem" @search="handleSearch"/>
    <el-table :data="tableData" style="width: 100%;margin-top: 25px;">
      <el-table-column label="文章标题" fixed="left">
        <!-- 文章标题和分类使用插槽是因为单元格里面除了文本之外还有图标，所以使用插槽自定义 -->
        <template #default="scope">
          <div style="display: flex;align-items: center;">
            <el-icon><timer /></el-icon>
            <span>{{scope.row.title}}</span>
          </div>
        </template>
      </el-table-column>

      
      <el-table-column label="分类" width="200px">
        <template #default="scope">
          <div style="display: flex;align-items: center;">
            <el-icon><timer /></el-icon>
            <!-- <span>{{scope.row.categoryName}}</span> -->
            <span>{{categoryMap[scope.row.categoryId]}}</span>
          </div>
        </template>
      </el-table-column>
      <!-- 作者这一列只用显示文本所以不用插槽 -->
      <el-table-column prop="authorName" label="作者" width="150px" />
      <el-table-column prop="readCount" label="阅读量" width="150px" />
      <el-table-column prop="updatedAt" label="发布时间" width="150px" />
      <!-- 操作是自定义内容 使用插槽-->
       <el-table-column label="操作" width="240px" fixed="right">
        <template #default="scope">
          <el-button text @click="handleEdit(scope.row)" type="primary" >编辑</el-button>
          <el-button @click="handlePublish(scope.row)" v-if="scope.row.status === 0||scope.row.status === 2" text type="success" >发布</el-button>
          <el-button @click="handleUnpublish(scope.row)" v-if="scope.row.status === 1" text type="warning" >下线</el-button>
          <el-button @click="handleDelete(scope.row)" text type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination 
    style="margin-top: 25px;"
    :page-size="pagination.size"
    layout="prev, pager, next" 
    :total="pagination.total" 
    @change="handleChange"
    />
    <ArticleDialog v-model:modelValue="DialogVisible" :article="currentArticle" :categories="categories" @success="handleSuccess"/>
  </div>
</template>

<script setup>
import PageHead from '../components/PageHead.vue'
import TableSearch from '../components/TableSearch.vue'
import {categoryTree,articlePage,getArticleDetail,changeArticleStatus,deleteArticle} from '../api/admin'
import {onMounted,ref,reactive} from 'vue'
import ArticleDialog from '../components/ArticleDialog.vue'
import {ElMessageBox,ElMessage} from 'element-plus'

const formItem =[
  {
    comp:'input',
    prop:'title',
    label:'文章标题',
    placeholder:'请输入文章标题'
  },
  {
    comp:'select',
    prop:'category',
    label:'分类',
    placeholder:'请选择分类',
   
  },
  {
    comp:'select',
    prop:'status',
    label:'状态',
    placeholder:'请选择状态',
    options:[
      {label:'草稿',value:0},
      {label:'已发布',value:1},
      {label:'已下架',value:2}
    ]
  }
]

//分页参数
const pagination = reactive({
  currentPage:1,
  size:10,
  total:0
})
//分类映射
const categoryMap = reactive({})

//分类列表
const categories = ref([])

//列表数据
const tableData = ref([])

//新增和编辑
const DialogVisible = ref(false)

const handleChange = (page)=>{
  pagination.currentPage = page
  handleSearch()
}
const handleSearch = async(formData) => {
  console.log(formData,'查询参数')
  //整合业务参数和分页参数
  const params ={
    ...formData,
    ...pagination
  }
  const {records,total} = await articlePage(params)
  tableData.value = records
  pagination.total = total
}

//生命周期
onMounted(async() => {
  const data = await categoryTree()
  categories.value = data.map(item => {
    categoryMap[item.id] = item.categoryName
    return {
      label:item.categoryName,
      value:item.id,
    }
  })
  formItem[1].options = categories.value
  console.log(categories.value,'分类列表')
  //获取列表  这个是默认状态 获取默认呈现的表格数据
  handleSearch()
})

const currentArticle = ref(null)

//编辑
const handleEdit = (row) => {
  if(!row.id) {
    currentArticle.value = null
    DialogVisible.value = true
  }
  else{
    getArticleDetail(row.id).then(res=>{
    
    currentArticle.value = res
    DialogVisible.value = true
  })
  }
  
}

const handleSuccess = () => {
  
  // 关闭弹窗
  DialogVisible.value = false
  //新增或编辑之后刷新列表
  handleSearch()
  
}

//发布文章
const handlePublish = (row) => {
  ElMessageBox.confirm(
    `确认发布文章${row.title}`,
    '确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(()=>{
    // 1代表发布 2代表下线
    changeArticleStatus(row.id,{status:1}).then(()=>{
      ElMessage.success('发布成功')
      handleSearch()
    })
  })
}

//下线文章
const handleUnpublish = (row) => {
  ElMessageBox.confirm(
    `确认下线文章${row.title}`,
    '确认',
    {
      confirmButtonText: '确认下线',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(()=>{
    // 1代表发布 2代表下线
    changeArticleStatus(row.id,{status:2}).then(()=>{
      ElMessage.success('下线成功')
      handleSearch()
    })
  })
}

const handleDelete = (row) => {
  ElMessageBox.confirm(
    `确认删除文章${row.title}`,
    '确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(()=>{
    //调用删除文章接口
    deleteArticle(row.id).then(()=>{
      ElMessage.success('删除成功')
      handleSearch()
    })
  })
}
</script>