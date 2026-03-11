import './BlockchainChat.css';

const BlockchainChat = () => {
  return (
    <section className="blockchain-chat section" id="blockchain-chat">
      <h2 className="section-title">Blockchain Chat Transactions</h2>
      <div className="blockchain-chat-card">
        <p className="blockchain-chat-lead">
          A highlighted feature where <strong>crypto transactions</strong> and{' '}
          <strong>cross-chain swaps</strong> can be initiated directly through a chat interface.
        </p>
        <p>
          Users interact via chat and trigger blockchain actions—such as swapping tokens across
          chains—from within the messaging flow. This demonstrates Web3 engineering and
          innovative mobile UX, blending conversational UI with secure on-chain operations.
        </p>
      </div>
    </section>
  );
};

export default BlockchainChat;
