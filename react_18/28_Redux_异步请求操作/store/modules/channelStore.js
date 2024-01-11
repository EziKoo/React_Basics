import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload
    }
  }
})


// 异步请求部分
const { setChannels } = channelStore.actions
const fetchChannelList = () => {
  // 有个疑惑，这里的形参dispatch是哪里来的？？
  // 因为这里返回的函数是一个回调函数，是由store来调用的，所以store会传入一个dispatch给你
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannelList }

const reducer = channelStore.reducer

export default reducer