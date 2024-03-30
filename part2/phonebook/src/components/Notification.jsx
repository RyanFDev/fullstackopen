const Notification = ({ message }) => {
  // Return nothing if message is null or undefined
  if (!message || !message.text) {
    return null;
  }

  // Determine the className based on the type
  const className = `notification ${message.type || ''}`;

  // Return the message with the determined className
  return <div className={className}>{message.text}</div>;
};

export default Notification;
