type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="text-2xl text-center">{message}</p>;
};

export default ErrorMessage;
