import Chatboticon from "./components/Chatboticon"

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
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
            <p className="message-text">
             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="user-message">
            <p className="message-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, vitae distinctio eligendi sint, nihil reiciendis maiores molestiae officia, quod tempore facilis esse iusto natus? Animi quis incidunt accusamus quod illum.</p>
          </div>
        </div>

        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required />
            <button className="material-symbols-rounded">arrow_upward</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App