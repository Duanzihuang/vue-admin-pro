import axios from 'axios'
import { notification } from 'ant-design-vue'

function request(options) {
  return axios(options)
    .then(res => {
      return res
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error
      notification.error({
        // message: status,
        // description: statusText
        // vue中使用jsx，需要安装包
        // https://github.com/vuejs/jsx

        // eslint-disable-next-line no-unused-vars
        message: h => (
          <div>
            请求错误 <span style="color:red;">{status}</span>：{options.url}
          </div>
        ),
        description: statusText
      })

      return Promise.reject(error)
    })
}

export default request
