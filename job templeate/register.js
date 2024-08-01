"use client";


export default function Register() {
   
   




    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 shadow  p-5">
                        <h2 className="mb-4 text-center">Register</h2>

                        <form >
                            <input
                                type="text"
                              
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your name"
                            />

                            <input
                                type="email"
                            
                                className=" mb-4"
                                style={{ outline: "none" }}
                                placeholder="Enter your email"
                            />

                            <input
                                type="password"
                             
                                className=" mb-4"
                                style={{ outline: "none" }}

                                placeholder="Enter your password"
                            />

                            <input
                                type="password"
                             
                                className=" mb-4"
                                style={{ outline: "none" }}

                                placeholder="Enter your cpassword"
                            />

                            <label>
                                <input
                                    style={{ outline: "none" }}

                                    type="radio"
                                    value="candidate"
                                //    checked={userType === 'candidate'}
                                //    onChange={(e) => setUserType(e.target.value)}
                                    className="radio-wrapper m-1 "
                                />
                                Candidate
                            </label>

                            <label>
                                <input
                                    style={{ outline: "none" }}

                                    type="radio"
                                    value="company"
                                   // checked={userType === 'company'}
                                  //  onChange={(e) => setUserType(e.target.value)}
                                    className="radio-wrapper  m-2"
                                />
                                Company
                            </label>
                            <br />
                            <button
                                type="submit"
                              //  disabled={loading || !name || !email || !password || !cpassword}
                            >
                              submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
