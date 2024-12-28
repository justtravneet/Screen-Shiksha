import React from 'react'
import rocket from '../../assets/Images/rocket.webp';
import Runner from '../../assets/Images/Runner.png';
import Generalcard from '../../GeneralComponent/Generalcard';
import Button from '../../component/Button';
const Placementbenefit = () => {
  return (
    <div>


      <div className='w-100% h-[auto] py-[50px]' style={{ backgroundColor: "#F6F4FB" }}>
        
        <div className=" max-w-6xl mx-auto px-3 sm:px-8 lg:px-20 flex flex-col justify-center md:justify-between items-center">
          <div className='flex gap-[20px]'>
           <a href="#Card"></a> <p>Home</p>
            <p>Benefits</p>
          
            
          </div>

          <div id='Card' className='flex flex-col lg:flex-row  justify-between py-[40px] gap-[40px] w-[100%]'>
            <div className='flex flex-col justify-center gap-[30px]'>
              <div className='flex flex-col justify-center '>
                  <p className='text-[18px] text-center'>Bootcamp Journey</p>
                  <p className='text-[30px] font-bold  text-center'>It's not just a course; <br />
                  <span style={{ color: "#0984FF" }}>it's an experience.</span></p>
              </div>

              <div className='flex justify-center text-center'>
                <Button 
                className='w-[50%] md:w-[55%] lg:w-[85%] bg-[#F66C3B] hover:bg-[#F66C3B] text-[18px]'
                label={"Book a free Webinar"}
                />
              </div>
              
            </div>

            {/* <div className='flex items-center justify-center gap-[60px]'>
              <div className='hidden md:flex flex items-center justify-center bg-white rounded-full w-[70px] h-[70px] shadow-md'>
                <img src={rocket} className='w-[35px]' alt="Rocket Icon" />
              </div>

              <div className='p-4 bg-white rounded-xl shadow-md'>
                <div className='flex items-center md:items-start gap-[15px]'>
                  <div>
                    <div>
                      <img src={rocket} className='w-[35px] md:hidden' alt="Rocket Icon" />
                      <p className='text-[16px] font-bold hidden md:block'>Kickstart your journey</p>
                    </div>
                  </div>
                  <div>
                    <ul className="list-disc list-inside ml-4 gap-[5px]">
                      <p className='text-[16px] font-bold md:hidden'>Kickstart your journey</p>
                      <li className="text-gray-500 text-[14px]">Explore career opportunities</li>
                      <li className="text-gray-500 text-[14px]">Build professional skills</li>
                      <li className="text-gray-500 text-[14px]">Network with industry leaders</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div> */}
            <div className='flex flex-col gap-[50px]'>
              <Generalcard
                imageSrc={rocket}
                imageAlt="Rocket Icon"
                title="Kickstart your journey"
                extraContent={<p>Excited</p>}
                listItems={[
                  "Explore career opportunities",
                  "Build professional skills",
                  "Network with industry leaders",
                ]}
              />

              <Generalcard
                imageSrc={rocket}
                imageAlt="Rocket Icon"
                title="Kickstart your journey"
                extraContent={<p>Confident</p>}
                 backgroundColor="#D4F1F4"
                listItems={[
                  "Explore career opportunities",
                  "Build professional skills",
                  "Network with industry leaders",
                ]}
              />
              <Generalcard
                imageSrc={rocket}
                imageAlt="Rocket Icon"
                title="Kickstart your journey"
                extraContent={<p>Confident</p>}
                 backgroundColor="#C9E4CA"
                listItems={[
                  "Explore career opportunities",
                  "Build professional skills",
                  "Network with industry leaders",
                ]}
              />
              <Generalcard
                imageSrc={rocket}
                imageAlt="Rocket Icon"
                title="Kickstart your journey"
                extraContent={<p>Confident</p>}
                backgroundColor="#C4D3F7" 
                listItems={[
                  "Explore career opportunities",
                  "Build professional skills",
                  "Network with industry leaders",
                ]}
              />


            </div>
          </div>
        </div>

      </div>



      <div className='w-100% h-auto'>
        <div  className=" max-w-6xl mx-auto px-3 sm:px-8 lg:px-20">


          <div className='py-[50px]'>
            <div><p className='text-[21px] font-semibold text-center'>Placement benefits</p></div>
            <div className='flex flex-wrap sm:justify-between gap-[10px]'>
              <div className='md:w-[30%]'>
                <div className='flex sm:flex-col  gap-[10px] p-4'>
                  <div>
                    <img src={Runner} className='w-[30px]' alt="" />
                  </div>
                  <div>
                    <p className='text-[16px] sm:text-[16px] font-semibold'>Profiles highlighted on hirist.com</p>
                    <p style={{ color: "#907F7F" }} className='text-[15px]'>Make a distinct mark for yourself on India's leading job portal.</p>
                  </div>
                </div>
              </div>
              <div className='md:w-[30%]'>
                <div className='flex sm:flex-col  gap-[10px] p-4'>
                  <div>
                    <img src={Runner} className='w-[30px]' alt="" />
                  </div>
                  <div>
                    <p className='text-[16px] sm:text-[16px] font-semibold'>Profiles highlighted on hirist.com</p>
                    <p style={{ color: "#907F7F" }} className='text-[15px]'>Make a distinct mark for yourself on India's leading job portal.</p>
                  </div>
                </div>
              </div>
              <div className='md:w-[30%]'>
                <div className='flex sm:flex-col  gap-[10px] p-4'>
                  <div>
                    <img src={Runner} className='w-[30px]' alt="" />
                  </div>
                  <div>
                    <p className='text-[16px] sm:text-[16px] font-semibold'>Profiles highlighted on hirist.com</p>
                    <p style={{ color: "#907F7F" }} className='text-[15px]'>Make a distinct mark for yourself on India's leading job portal.</p>
                  </div>
                </div>
              </div>
              <div className='md:w-[30%]'>
                <div className='flex sm:flex-col  gap-[10px] p-4'>
                  <div>
                    <img src={Runner} className='w-[30px]' alt="" />
                  </div>
                  <div>
                    <p className='text-[16px] sm:text-[16px] font-semibold'>Profiles highlighted on hirist.com</p>
                    <p style={{ color: "#907F7F" }} className='text-[15px]'>Make a distinct mark for yourself on India's leading job portal.</p>
                  </div>
                </div>
              </div>
              <div className='md:w-[30%]'>
                <div className='flex sm:flex-col  gap-[10px] p-4'>
                  <div>
                    <img src={Runner} className='w-[30px]' alt="" />
                  </div>
                  <div>
                    <p className='text-[16px] sm:text-[16px] font-semibold'>Profiles highlighted on hirist.com</p>
                    <p style={{ color: "#907F7F" }} className='text-[15px]'>Make a distinct mark for yourself on India's leading job portal.</p>
                  </div>
                </div>
              </div>
              <div className='md:w-[30%]'>
                <div className='flex sm:flex-col  gap-[10px] p-4'>
                  <div>
                    <img src={Runner} className='w-[30px]' alt="" />
                  </div>
                  <div>
                    <p className='text-[16px] sm:text-[16px] font-semibold'>Profiles highlighted on hirist.com</p>
                    <p style={{ color: "#907F7F" }} className='text-[15px]'>Make a distinct mark for yourself on India's leading job portal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>







        </div>
      </div>
    </div>
  )
}

export default Placementbenefit