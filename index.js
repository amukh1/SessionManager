class sessionManager {
    constructor(){
      this.Sessions_ = 0
      this.Sessions = {}
      this.Session = Session
    }
  }
  
  class Session {
    constructor(sessionManager, id){
      if(id){
        this.id = id
      }else {
      this.id = sessionManager.Sessions_ + 1
      }
      sessionManager.Sessions_++
      sessionManager.Sessions[this.id] = this
      this.sessionManager = sessionManager
      this.data = {}
    }
    update(data){
      this.data = data
      return this
    }
    set(key, data){
      this.data[key] = data
      return this
    }
  }
  
  module.exports = sessionManager
  
  
  // let s1 = new sessionManager.Session(sessionManager)
  
  // let s2 = new sessionManager.Session(sessionManager)
  
  // // s2.data['hi'] = 'hi'
  // s2.set('hi', 'hi')
  
  // console.log(sessionManager.Sessions['2'])
  
  // console.log(s1)
  // console.log(s2)
  // console.log(sessionManager)