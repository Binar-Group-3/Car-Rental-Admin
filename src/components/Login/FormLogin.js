const FormLogin = (props) => {
  const { email, password, setEmail, setPassword, handleSubmit } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" autoComplete="off" required />
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" required />
        </div>
        <button>Sign In</button>
      </form>
    </>
  );
};

export default FormLogin;
