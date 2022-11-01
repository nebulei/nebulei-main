import Nav from "../components/LoginNav";

const Login = () => {
  return (
    <div id="Login">

      <Nav />

      <section className="bg-gray-50">
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <a href="/" className="nebulei-font flex items-center mb-6 text-2xl font-semibold text-gray-900">
                <img className="w-8 h-8 mr-2" src="https://storage.googleapis.com/nebulei-main-images/icons/nebulei-svg-logo" alt="nebulei"></img>
                Nebulei    
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="libre-font text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account.
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-200 focus:border-primary-200 block w-full p-2.5" placeholder="name@company.com"></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="•••••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></input>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"></input>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                </div>
                            </div>
                            <a href="/" className="text-sm font-medium text-black hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="nebulei-font w-full text-white bg-primary-300 hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2.5 text-center">Login</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Login;