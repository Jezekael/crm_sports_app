function handleSubmit(e) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());
  //console.log(formJson);
}
const Connexion = () => {
    return <>
    <h1>Connexion</h1>
    <form method="post" onSubmit={handleSubmit}>
      <h2>Username</h2>
      <input name="username"/>
      <h2>Password</h2>
      <input name="password"/>
      <button type="submit">Connect</button>
      <label>
      <input type="checkbox" name="rememberme" defaultChecked={false} /> Remember me
      </label>
    </form>
    </>;
    
  };
  
  export default Connexion;