
function LoginButton({setLogin}) {
    const hanldeSubmit = (event) => {
        // setLogin(true)
        console.log(setLogin)
        // localStorage.setItem('loginKey', true);
        // window.location.reload(true);
    };
    return (
        <div >
            <button className="loginButton" onClick={hanldeSubmit}>Login</button>
        </div>
    )
}
export default LoginButton;