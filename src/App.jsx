import Chatboticon from "./components/Chatboticon"

const App = () => {
  return (
    <div className="container">
      <div className="chat-header">
        <div className="header-info">
          <Chatboticon />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded">keyboard_arrow_down</button>
      </div>

      <div className="chat-body">
        <div className="message bot-message">
          <Chatboticon />
          <p className="meesage-text">
            Hi!
          </p>
        </div>
        <div className="user-message">
          <p className="message-text">temp</p>
        </div>
      </div>

      <div className="chat-footer">
        <form action="#" className="chat-form">
          <input type="text" placeholder="Message..." className="message-input" required />
          <button className="material-symbols-rounded">arrow_upward</button>
        </form>
        </div>
    </div>
  )
}

export default App