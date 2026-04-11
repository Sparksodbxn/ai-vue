import service from '../utils/request'
// 前台接口

// 注册接口
export function register(data) {
  return service.post('/user/add', data)
}

// 创建新会话接口
export function startSession(data) {
  return service.post('/psychological-chat/session/start', data)
}

// 分页查询会话  参数是分页参数
export function getSessionList(params) {
  return service.get('/psychological-chat/sessions', { params })
}

// 删除会话接口
export function deleteSession(sessionId) {
  return service.delete(`/psychological-chat/sessions/${sessionId}`)
}

// 获取会话消息列表
export function getSessionMessages(sessionId) {
  return service.get(`/psychological-chat/sessions/${sessionId}/messages`)
}

// 获取情绪分析结果接口
export function getSessionEmotion(sessionId) {
  return service.get(`/psychological-chat/session/${sessionId}/emotion`)
}

// 提交情绪日记接口
export function submitEmotionDiary(data) {
  return service.post('/emotion-diary', data)
}

// 查询文章列表
export function getKnowledgeList(params) {
  return service.get('/knowledge/article/page', { params })
}

// 获取知识文章详情接口
export function getKnowledgeDetail(id) {
  return service.get(`/knowledge/article/${id}`)
}