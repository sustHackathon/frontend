import React from 'react'

function Footer() {
  return (
    <footer className='relative bg-gradient-to-bl from-gray-50 via-gray-100 to-sky-100 to-95% text-black'>
        <div className='container mx-auto px-6'>
            <div className='grid grid-cols-12'>
              <div className='col-span-12'>
                <div className='py-[60px] px-0'>
                  <div className='grid md:grid-cols-12 grid-cols-1 gap-[30px]'>
                    <div className='lg:col-span-4 md:col-span-12'>
                      <span className='text-2xl text-purple-500 font-semibold flex justify-center lg:justify-start'>Company Logo</span>
                      <p className='mt-6 text-black text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure qui explicabo libero porro unde vero culpa ab quis, reiciendis id.</p>
                      <ul className='list-none mt-6 text-center lg:text-justify'>
                        <li className='inline'>
                            <a href="" className='font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border border-gray-100 rounded-md hover:border-yellow-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className='fill-gray-300'>
                            <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                          </svg>
                          </a>
                        </li>
                        <li className='inline'>
                            <a href="" className='font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border border-gray-100 rounded-md hover:border-yellow-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className='fill-gray-300'>
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                          </a>
                        </li>
                        <li className='inline'>
                            <a href="" className='font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border border-gray-100 rounded-md hover:border-yellow-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className='fill-gray-300'>
                              <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                              </svg>
                          </a>
                        </li>
                        <li className='inline'>
                            <a href="" className='font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border border-gray-100 rounded-md hover:border-yellow-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className='fill-gray-300'>
                            <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h5 className='tracking-[1px] text-purple-500 font-semibold'>Company</h5>
                      <ul className='list-none mt-6'>
                        <li>
                          <a href="" className='text-black hover:text-gray-400 transition-all duration-500 ease-in-out'>About Us</a>
                        </li>
                        <li className='mt-[10px]'>
                          <a href="" className='text-black hover:text-gray-400 transition-all duration-500 ease-in-out'>Services</a>
                        </li>
                        <li className='mt-[10px]'>
                          <a href="" className='text-black hover:text-gray-400 transition-all duration-500 ease-in-out'>Pricing</a>
                        </li>
                        <li className='mt-[10px]'>
                          <a href="" className='text-black hover:text-gray-400 transition-all duration-500 ease-in-out'>Blog</a>
                        </li>
                      </ul>
                    </div>

                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h5 className='tracking-[1px] text-purple-500 font-semibold'>Important</h5>
                      <ul className='list-none mt-6'>
                        <li>
                          <a href="" className='text-black hover:text-gray-400 transition-all duration-500 ease-in-out'>Terms of Services</a>
                        </li>
                        <li className='mt-[10px]'>
                          <a href="" className='text-black hover:text-gray-400 transition-all duration-500 ease-in-out'>Privacy Plicy</a>
                        </li>
                        <li className='mt-[10px]'>
                          <a href="" className='text-black hover:text-gray-400 transition-all duration-500 ease-in-out'>Documentation</a>
                        </li>
                        
                      </ul>
                    </div>

                    <div className='lg:col-span-2 md:col-span-4 text-center lg:text-justify'>
                      <h5 className='tracking-[1px] text-purple-500 font-semibold'>Links</h5>
                      <ul className='list-none mt-6'>
                        <p>Sign Up and get latest update</p>
                        
                      </ul>
                    </div>


                  </div>
                </div>
              </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer