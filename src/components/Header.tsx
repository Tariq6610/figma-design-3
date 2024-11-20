import { FaBars } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  return (
     <nav className='text-white flex justify-between font-sans items-center py-[16px] 2xl:px-[220px] md:px-[32px]   px-[16px] top-0 left-0 w-full bg-[#043873] '>
        <div>
        <svg width="191" height="34" viewBox="0 0 191 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_9_315)">
            <path d="M0 4.86525V11.6182C0 13.6749 2.50611 14.7719 4.03763 13.3322L11.3471 6.5792C12.9483 5.1052 11.904 2.5 9.71119 2.5H2.40169C1.07902 2.5 0 3.56265 0 4.86525Z" fill="white"/>
            <path d="M34.5983 2.5H27.2888C25.1308 2.5 24.0517 5.1052 25.6529 6.5792L32.9624 13.3322C34.4939 14.7376 37 13.6749 37 11.6182V4.86525C37 3.56265 35.921 2.5 34.5983 2.5Z" fill="white"/>
            <path d="M20.1533 18.9884L32.9624 30.8489C34.4939 32.2543 37 31.1917 37 29.1349V22.3134C37 21.6621 36.7215 21.0451 36.2342 20.5995L20.1533 5.68814C19.2135 4.83117 17.7865 4.83117 16.8467 5.68814L0.765757 20.5995C0.278457 21.0451 0 21.6621 0 22.3134V29.1349C0 31.1917 2.50611 32.2886 4.03763 30.8489L16.8467 18.9884C17.7865 18.1314 19.2135 18.1314 20.1533 18.9884Z" fill="white"/>
            </g>
            <path d="M51.7031 27L47.5469 11.7273H51.8324L54.1989 21.9886H54.3381L56.804 11.7273H61.0099L63.5156 21.929H63.6449L65.9716 11.7273H70.2472L66.1009 27H61.6165L58.9915 17.3949H58.8026L56.1776 27H51.7031ZM76.7425 18.1705V27H72.5067V6.63636H76.6232V14.4219H76.8022C77.1469 13.5204 77.7037 12.8144 78.4727 12.304C79.2416 11.7869 80.2061 11.5284 81.3661 11.5284C82.4267 11.5284 83.3514 11.7604 84.1403 12.2244C84.9357 12.6818 85.5522 13.3414 85.9897 14.2031C86.4338 15.0582 86.6526 16.0824 86.646 17.2756V27H82.4102V18.0312C82.4168 17.09 82.1781 16.3575 81.6942 15.8338C81.217 15.3101 80.5475 15.0483 79.6857 15.0483C79.109 15.0483 78.5986 15.1709 78.1545 15.4162C77.717 15.6615 77.3723 16.0194 77.1204 16.4901C76.8751 16.9541 76.7492 17.5142 76.7425 18.1705ZM89.9794 27V11.7273H94.2152V27H89.9794ZM92.1072 9.75852C91.4775 9.75852 90.9373 9.54972 90.4865 9.1321C90.0424 8.70786 89.8203 8.20076 89.8203 7.61079C89.8203 7.02746 90.0424 6.52699 90.4865 6.10938C90.9373 5.68513 91.4775 5.47301 92.1072 5.47301C92.737 5.47301 93.2739 5.68513 93.718 6.10938C94.1688 6.52699 94.3942 7.02746 94.3942 7.61079C94.3942 8.20076 94.1688 8.70786 93.718 9.1321C93.2739 9.54972 92.737 9.75852 92.1072 9.75852ZM105.732 11.7273V14.9091H96.5344V11.7273H105.732ZM98.6225 8.06818H102.858V22.3068C102.858 22.6979 102.918 23.0028 103.037 23.2216C103.157 23.4337 103.322 23.5829 103.534 23.669C103.753 23.7552 104.005 23.7983 104.29 23.7983C104.489 23.7983 104.688 23.7817 104.887 23.7486C105.086 23.7088 105.238 23.679 105.344 23.6591L106.01 26.8111C105.798 26.8774 105.5 26.9536 105.115 27.0398C104.731 27.1326 104.264 27.1889 103.713 27.2088C102.693 27.2486 101.798 27.1127 101.029 26.8011C100.266 26.4896 99.6732 26.0057 99.2489 25.3494C98.8247 24.6932 98.6159 23.8646 98.6225 22.8636V8.06818ZM115.287 27.2983C113.716 27.2983 112.364 26.9801 111.23 26.3438C110.104 25.7008 109.235 24.7926 108.625 23.6193C108.016 22.4394 107.711 21.044 107.711 19.4332C107.711 17.8622 108.016 16.4834 108.625 15.2969C109.235 14.1103 110.094 13.1856 111.201 12.5227C112.314 11.8598 113.62 11.5284 115.118 11.5284C116.126 11.5284 117.064 11.6908 117.932 12.0156C118.807 12.3338 119.569 12.8144 120.219 13.4574C120.875 14.1004 121.386 14.9091 121.75 15.8835C122.115 16.8513 122.297 17.9848 122.297 19.2841V20.4474H109.401V17.8224H118.31C118.31 17.2126 118.177 16.6723 117.912 16.2017C117.647 15.7311 117.279 15.3632 116.809 15.098C116.345 14.8262 115.804 14.6903 115.188 14.6903C114.545 14.6903 113.975 14.8395 113.478 15.1378C112.987 15.4295 112.603 15.8239 112.324 16.321C112.046 16.8116 111.903 17.3584 111.897 17.9616V20.4574C111.897 21.2131 112.036 21.866 112.314 22.4162C112.599 22.9664 113 23.3906 113.517 23.6889C114.034 23.9872 114.648 24.1364 115.357 24.1364C115.828 24.1364 116.258 24.0701 116.65 23.9375C117.041 23.8049 117.375 23.6061 117.654 23.3409C117.932 23.0758 118.144 22.7509 118.29 22.3665L122.208 22.625C122.009 23.5663 121.601 24.3883 120.985 25.0909C120.375 25.7869 119.586 26.3305 118.618 26.7216C117.657 27.1061 116.547 27.2983 115.287 27.2983ZM125.061 32.7273V11.7273H129.238V14.2926H129.426C129.612 13.8816 129.881 13.464 130.232 13.0398C130.59 12.6089 131.054 12.2509 131.624 11.9659C132.201 11.6742 132.917 11.5284 133.772 11.5284C134.885 11.5284 135.913 11.8201 136.854 12.4034C137.795 12.9801 138.548 13.8518 139.111 15.0185C139.675 16.1785 139.956 17.6335 139.956 19.3835C139.956 21.0871 139.681 22.5256 139.131 23.6989C138.587 24.8655 137.845 25.7505 136.904 26.3537C135.969 26.9503 134.922 27.2486 133.762 27.2486C132.94 27.2486 132.24 27.1127 131.664 26.8409C131.094 26.5691 130.626 26.2277 130.262 25.8168C129.897 25.3991 129.619 24.9782 129.426 24.554H129.297V32.7273H125.061ZM129.208 19.3636C129.208 20.2718 129.334 21.0639 129.586 21.7401C129.837 22.4162 130.202 22.9432 130.679 23.321C131.157 23.6922 131.737 23.8778 132.419 23.8778C133.109 23.8778 133.692 23.6889 134.169 23.3111C134.647 22.9266 135.008 22.3963 135.253 21.7202C135.505 21.0374 135.631 20.2519 135.631 19.3636C135.631 18.482 135.508 17.7064 135.263 17.0369C135.018 16.3674 134.657 15.8437 134.179 15.4659C133.702 15.0881 133.115 14.8991 132.419 14.8991C131.73 14.8991 131.147 15.0814 130.669 15.446C130.199 15.8106 129.837 16.3277 129.586 16.9972C129.334 17.6667 129.208 18.4555 129.208 19.3636ZM147.135 27.2884C146.161 27.2884 145.292 27.1193 144.53 26.7812C143.768 26.4366 143.165 25.9295 142.721 25.2599C142.283 24.5838 142.064 23.742 142.064 22.7344C142.064 21.8859 142.22 21.1733 142.532 20.5966C142.843 20.0199 143.267 19.5559 143.804 19.2045C144.341 18.8532 144.951 18.5881 145.634 18.4091C146.323 18.2301 147.046 18.1042 147.801 18.0312C148.69 17.9384 149.406 17.8523 149.949 17.7727C150.493 17.6866 150.887 17.5606 151.132 17.3949C151.378 17.2292 151.5 16.9839 151.5 16.6591V16.5994C151.5 15.9697 151.301 15.4825 150.904 15.1378C150.513 14.7931 149.956 14.6207 149.233 14.6207C148.471 14.6207 147.864 14.7898 147.414 15.1278C146.963 15.4593 146.665 15.8769 146.519 16.3807L142.601 16.0625C142.8 15.1345 143.191 14.3324 143.775 13.6562C144.358 12.9735 145.11 12.4498 146.032 12.0852C146.96 11.714 148.033 11.5284 149.253 11.5284C150.102 11.5284 150.914 11.6278 151.689 11.8267C152.471 12.0256 153.164 12.3338 153.767 12.7514C154.377 13.169 154.858 13.706 155.209 14.3622C155.56 15.0118 155.736 15.7907 155.736 16.6989V27H151.719V24.8821H151.6C151.355 25.3594 151.026 25.7803 150.615 26.1449C150.204 26.5028 149.711 26.7846 149.134 26.9901C148.557 27.1889 147.891 27.2884 147.135 27.2884ZM148.348 24.3651C148.971 24.3651 149.522 24.2424 149.999 23.9972C150.476 23.7453 150.851 23.4072 151.123 22.983C151.394 22.5587 151.53 22.0781 151.53 21.5412V19.9205C151.398 20.0066 151.215 20.0862 150.983 20.1591C150.758 20.2254 150.503 20.2884 150.218 20.348C149.933 20.401 149.648 20.4508 149.363 20.4972C149.078 20.5369 148.819 20.5734 148.587 20.6065C148.09 20.6795 147.656 20.7955 147.284 20.9545C146.913 21.1136 146.625 21.3291 146.419 21.6009C146.214 21.866 146.111 22.1974 146.111 22.5952C146.111 23.1719 146.32 23.6127 146.738 23.9176C147.162 24.2159 147.699 24.3651 148.348 24.3651ZM165.923 27.2983C164.359 27.2983 163.013 26.9669 161.886 26.304C160.766 25.6345 159.904 24.7064 159.301 23.5199C158.704 22.3333 158.406 20.9678 158.406 19.4233C158.406 17.8589 158.708 16.4867 159.311 15.3068C159.921 14.1203 160.786 13.1955 161.906 12.5327C163.026 11.8632 164.359 11.5284 165.903 11.5284C167.235 11.5284 168.402 11.7704 169.403 12.2543C170.404 12.7382 171.196 13.4176 171.779 14.2926C172.363 15.1676 172.684 16.1951 172.744 17.375H168.747C168.634 16.6127 168.336 15.9995 167.852 15.5355C167.375 15.0649 166.748 14.8295 165.973 14.8295C165.316 14.8295 164.743 15.0085 164.252 15.3665C163.769 15.7178 163.391 16.2315 163.119 16.9077C162.847 17.5838 162.711 18.4025 162.711 19.3636C162.711 20.3381 162.844 21.1667 163.109 21.8494C163.381 22.5322 163.762 23.0526 164.252 23.4105C164.743 23.7685 165.316 23.9474 165.973 23.9474C166.457 23.9474 166.891 23.848 167.275 23.6491C167.666 23.4503 167.988 23.1619 168.24 22.7841C168.498 22.3996 168.667 21.9389 168.747 21.402H172.744C172.678 22.5687 172.359 23.5961 171.789 24.4844C171.226 25.366 170.447 26.0554 169.453 26.5526C168.458 27.0497 167.282 27.2983 165.923 27.2983ZM182.416 27.2983C180.845 27.2983 179.493 26.9801 178.359 26.3438C177.232 25.7008 176.364 24.7926 175.754 23.6193C175.144 22.4394 174.839 21.044 174.839 19.4332C174.839 17.8622 175.144 16.4834 175.754 15.2969C176.364 14.1103 177.223 13.1856 178.33 12.5227C179.443 11.8598 180.749 11.5284 182.247 11.5284C183.255 11.5284 184.193 11.6908 185.061 12.0156C185.936 12.3338 186.698 12.8144 187.348 13.4574C188.004 14.1004 188.515 14.9091 188.879 15.8835C189.244 16.8513 189.426 17.9848 189.426 19.2841V20.4474H176.53V17.8224H185.439C185.439 17.2126 185.306 16.6723 185.041 16.2017C184.776 15.7311 184.408 15.3632 183.938 15.098C183.473 14.8262 182.933 14.6903 182.317 14.6903C181.674 14.6903 181.104 14.8395 180.607 15.1378C180.116 15.4295 179.732 15.8239 179.453 16.321C179.175 16.8116 179.032 17.3584 179.026 17.9616V20.4574C179.026 21.2131 179.165 21.866 179.443 22.4162C179.728 22.9664 180.129 23.3906 180.646 23.6889C181.163 23.9872 181.777 24.1364 182.486 24.1364C182.956 24.1364 183.387 24.0701 183.778 23.9375C184.17 23.8049 184.504 23.6061 184.783 23.3409C185.061 23.0758 185.273 22.7509 185.419 22.3665L189.337 22.625C189.138 23.5663 188.73 24.3883 188.114 25.0909C187.504 25.7869 186.715 26.3305 185.747 26.7216C184.786 27.1061 183.676 27.2983 182.416 27.2983Z" fill="white"/>
            <defs>
            <clipPath id="clip0_9_315">
            <rect width="37" height="29" fill="white" transform="translate(0 2.5)"/>
            </clipPath>
            </defs>
            </svg>

        </div>
        <div className='flex gap-[60px] '>
            <div className='xl:flex gap-[60px] hidden'>
                <select className='bg-[#043873]' name="" id="">
                    <option  value="Products">Products</option>
                </select>
                <select className='bg-[#043873]' name="" id="">
                    <option  value="Solutions">Solutions</option>
                </select>
                <select className='bg-[#043873]' name="" id="">
                    <option  value="Recources">Recources</option>
                </select>
                <select className='bg-[#043873]' name="" id="">
                    <option  value="Pricing">Pricing</option>
                </select>
            </div>
            <div className='flex gap-[24px] items-center'>
                <div className='hidden lg:flex gap-[24px]'>
                <button className='bg-[#FFE492] rounded-lg text-black w-[126px] h-[60px]'>Login</button>
                <button className='flex justify-center items-center gap-2 w-[227px] h-[60px] font-[500] bg-[#4F9CF9]'>Try whitespace free <GoArrowRight /></button>
                </div>
                <div className='xl:hidden text-3xl cursor-pointer'><FaBars /></div>
            </div>
        </div>
     </nav>

  )
}

export default Header