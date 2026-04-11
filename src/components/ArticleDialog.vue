<template>
  <el-dialog
    :title="isEdit?'编辑文章':'创建文章'"
    v-model="dialogVisible"
    width="50%"
    @close="handleClose"
  >
    <el-form :model="formData" :rules="rules" ref="formRef" label-width="120px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formData.title" placeholder="请输入文章标题" maxlength="200" show-word-limit clearable></el-input>
      </el-form-item>
      <el-form-item label="所属分类" prop="categoryId">
        <el-select v-model="formData.categoryId" placeholder="请选择分类">
          <el-option v-for="item in props.categories" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章摘要" prop="summary">
        <el-input type="textarea" v-model="formData.summary" placeholder="请输入文章摘要" maxlength="1000" show-word-limit clearable :rows="4"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <el-select v-model="formData.tagArray" placeholder="请输入文章标签(逗号分隔)" multiple filterable clearable allow-create style="width: 100%;">
          <el-option v-for="tag in commonTags" :key="tag" :label="tag" :value="tag"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="封面上传">
        <div class="cover-upload">
          <el-upload
            class="avatar-uploader"
            action="#"
            :before-upload="beforeUpload"
            :http-request="handleUploadRequest"
            :show-file-list="false"
            accept="image/*"
          >
            <div v-if="!imgUrl" class="cover-placeholder">
              <p>点击上传封面图片</p>
            </div>
            <img v-else :src="imgUrl" class="cover-img" alt="封面"/>
          </el-upload>
          <div v-if="imgUrl" class="cover-remove">
            <el-button type="danger" size="mini" @click="handleRemove">移除封面</el-button>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <RichTextEditor 
        v-model="formData.content"
        :placeholder="'请输入文章内容,支持富文本格式'"
        :max-char-count="5000"
        @change="handleContentChange"
        @created="handleEditorCreated"
        min-height="400px"
        />
      </el-form-item>
    </el-form>
    <div v-if="btnPreview">
        <h3>内容预览</h3>
        <div v-html="formData.content"></div>
      </div>
    <template #footer>
      <el-button @click="btnPreview = !btnPreview">{{ btnPreview ? '隐藏预览' : '预览效果' }}</el-button>
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="handleSubmit()" :loading="loading">{{ isEdit?'编辑文章':'创建文章' }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ref, reactive,computed,nextTick,watch } from 'vue'
import {uploadFile,createArticle,updateArticle} from '../api/admin'
import {fileBaseUrl} from '../config/index.js'
import RichTextEditor from '../components/RichTextEditor.vue'
import { normalizeModuleId } from 'vite/module-runner'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  categories: {
    type: Array,
    default: () => []
  },
  article: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:modelValue','success'])
const rules = reactive({
  title: [
    { required: true, message: '请输入文章标题', trigger: 'blur' },
    {max: 200, message: '文章标题最多200个字符', trigger: 'blur'}
  ],
  categoryId: [
    { required: true, message: '请选择分类', trigger: 'change' }
  ],
  content:[
    { required: true, message: '请输入文章内容', trigger: 'blur' },
    {max: 5000, message: '文章内容最多5000个字符', trigger: 'blur'}
  ]
})
//这一句实现弹窗表头标题和底下按钮的变更
const isEdit = computed(() => !!props.article?.id)  //问号代表前面属性存在就获取id 一个叹号取反 两个叹号表示把当前值转为布尔类型

//监听编辑数据
watch(()=>props.article,(newVal)=>{
  if(newVal){
    nextTick(()=>{
      //编辑时  把数据赋值给表单
    //reactive不能整体赋值  只能属性赋值
    Object.assign(formData,newVal)
    businessId.value = newVal.id
    //封面图片需要拼接完整路径
    imgUrl.value = `${fileBaseUrl}${newVal.coverImage}`
    })
    

  }
})

//子组件不能直接修改父组件的状态 所以需要用computed来实现双向绑定
const dialogVisible = computed({
  get(){
    return props.modelValue
  },
  set(val){
    emit('update:modelValue',val)
  }
})

const handleRemove = () => {
  //清空图片url
  imgUrl.value = ''
  //清空表单数据
  formData.coverImage = ''
}

const handleClose = () => {
  // 重置表单
  formRef.value.resetFields()
  //重置id
  businessId.value = null
  //重置标签
  formData.tagArray = []
  //重置图片url
  handleRemove()
  // 子传父 关闭弹窗 更新props值
  emit('update:modelValue',false)
}

const btnPreview =ref(false)

//表单数据
const formData = reactive(
  {
    "title": "",
    "content": "",
    "coverImage": "",
    "categoryId": 1,
    "summary": "",
    "tagArray": [],
    "id": ""
}
)
//标签
const commonTags = [
  '情绪管理', '焦虑', '抑郁', '压力', '睡眠', 
  '冥想', '正念', '放松', '心理健康', '自我成长',
  '人际关系', '工作压力', '学习方法', '生活技巧'
]

//上传
const imgUrl = ref('')
const breforeUpload = (file) => {
  //针对上传的文件进行校验
  console.log(file)
  const isImage = file.type.startsWith('image/')
  const isLt5M = file.size / 1024 / 1024 <5
  if (!isImage) {
    ElMessage.error('上传封面图片，请选择图片文件')
    // 返回为true才会触发第二个方法即handleUploadRequest
    return false
  }
  if (!isLt5M) {
    ElMessage.error('上传封面图片，图片大小不能超过5MB')
    return false
  }
  return true
}

const businessId = ref(null)
const handleUploadRequest = async ({file}) => {
  //UUID生成
  businessId.value = crypto.randomUUID()

  const fileRes = await uploadFile(file,{
    businessId: businessId.value,
  })
  console.log(fileRes)

  //图片进行拼接 拼接完整的图片地址  fileBaseUrl是服务器地址 去服务器拿到图片资源
  imgUrl.value = `${fileBaseUrl}${fileRes.filePath}`
  //后端只要相对路径 
  formData.coverImage = fileRes.filePath

}

//富文本
const handleContentChange = (data) => {
  //data有两个值 一个是html 一个是text纯文本
  formData.content = data.html
}

const editorInstance = ref(null)
const handleEditorCreated = (editor) => {
  editorInstance.value = editor

  //创建完成之后做的事情
  if(formData.content && editor){
    nextTick(() => {
    //如果有内容 就设置为html格式
      editor.setHtml(formData.content)  
    })
  }
}
const formRef = ref(null)

const loading = ref(false)
const handleSubmit = ()=>{
  // 表单校验
  formRef.value.validate((valid,fields)=>{
    if(valid){
      loading.value = true
    }
    const submitData={
      ...formData,
      tags: formData.tagArray.join(','),
    }
    delete submitData.tagArray

    if(!isEdit.value){
      submitData.id=businessId.value
      //调新增接口
      createArticle(submitData).then(res=>{
      loading.value = false
      emit('success')
    })
    }
    else{
      //调编辑接口
      updateArticle(props.article.id,submitData).then(res=>{
        loading.value = false
        emit('success')
      })
    }

    
  })
  
}

</script>

<style lang="scss" scoped>
  .cover-placeholder {
    width: 200px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#8b949e;
    background-color: #f6f8fa;
    cursor: pointer;
  }

  .cover-img {
    width: 200px;
    height: 120px;
    display: block;
  }

</style>