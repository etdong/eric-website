import BouncingBalls from '../components/BouncingBalls'
import './home.css'

const contacts = () => {
    return (
        <>
            <a className='link' href='https://www.linkedin.com/in/etdong/' target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
            </a>
            <a className='link' href='https://github.com/etdong' target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </a>
            <a className='link' href='https://drive.google.com/file/d/1UOlHbdyXvbYu7YcEK1Zpzz0s2b0KxC4J/view?usp=sharing' target='_blank' rel='noreferrer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 48 44">
            <g>
                <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
                    C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
                    c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
                    c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
                    L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
                    M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
                    h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
            </g>
            </svg>
            </a>
        </>
    )
}

function HomeZh() {

    window.addEventListener("DOMContentLoaded", (event) => {
        const langSwitch = document.getElementById('langswitch');
        langSwitch.addEventListener('change', () => {
            if (langSwitch.checked) {
                window.location.href = '/zh';
                console.log("test")
            } else {
                window.location.href = '/en';
                console.log("test2")

            }
        });
    });

    

    return (
        <div className="home">
            <div className='blur-screen'>
                <div className='blur-screen-inner'>
                    <div className='left info'>
                        <div className='name'>
                            Eric Dong 董天凝
                        </div>
                        <br />
                        <div className='desc'>
                            软件工程本科 四年级
                            <br />
                            阿尔伯塔大学
                        </div>
                        <div className='contact_container'>
                            <div className='contact'>
                                {contacts()}
                                <div className='language desc'>
                                    <a href='/#'><div>EN</div></a>
                                </div>
                            </div>
                            
                        </div>

                        
                    </div>

                    <div className='right info'>
                        <div className='category'>
                            <div className='header'>
                            工作经验
                            </div>
                            <div className='subheader'>
                                <b>四川大学青岛研究院</b>
                                <br />
                                <i>2025年11月至今</i>
                                <br />
                                研究实习生
                            </div>
                            <div className='subheader'>
                                <b>中密控股股份有限公司</b>
                                <br />
                                <i>2025年5月至2025年9月</i>
                                <br />
                                项目管理员
                            </div>
                            <div className='subheader'>
                                <b>Lumentum</b>
                                <br />
                                <i>2024年1月至2024年8月</i>
                                <br />
                                软件工程师
                            </div>
                            <div className='subheader'>
                                <b>Space Exploration Alberta Robotics</b>
                                <br />
                                <i>2023年9月至2024年1月</i>
                                <br />
                                驱动系统工程师
                            </div>
                        </div>
                        <div className='category'>
                            <div className='header'>
                                个人项目
                            </div>
                            <div className='subheader'>
                                <a href='https://github.com/etdong/webhunt' target='_blank' rel='noreferrer'><b>WebHunt</b></a>
                                <svg fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.656 162.656">
                                <g>
                                    <path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988
                                        l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484
                                        c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91
                                        c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"/>
                                    <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21
                                        c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086
                                        c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887
                                        l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"/>
                                </g>
                                </svg>
                                <br />
                                基于 Word Hunt 的网页游戏
                                <br />
                                <div className='subscript'><i>React, TypeScript, JavaScript, Express.js, Node.js, socket.io, Passport, MongoDB</i></div>
                            </div>
                            <div className='subheader'>
                                <a href='https://github.com/etdong/mitosu' target='_blank' rel='noreferrer'><b>mitosu!</b></a>
                                <svg fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.656 162.656">
                                <g>
                                    <path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988
                                        l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484
                                        c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91
                                        c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"/>
                                    <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21
                                        c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086
                                        c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887
                                        l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"/>
                                </g>
                                </svg>
                                <br />
                                人气节奏游戏 osu! 的AI歌曲推荐系统
                                <br />
                                <div className='subscript'>
                                    <i>Tensorflow, Python, MongoDB, React, JavaScript, Express.js, Node.js</i>
                                </div>
                            </div>
                            <div className='subheader'>
                                <a href='https://github.com/etdong/ael-astreroids' target='_blank' rel='noreferrer'><b>Asteroids AI</b></a>
                                <svg fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.656 162.656">
                                <g>
                                    <path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988
                                        l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484
                                        c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91
                                        c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"/>
                                    <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21
                                        c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086
                                        c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887
                                        l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"/>
                                </g>
                                </svg>
                                <br />
                                小行星游戏 Fuzzy AI控制器
                                <br />
                                <div className='subscript'>
                                    <i>Python, SciKit Learn</i>
                                </div>
                            </div>
                            <div className='subheader'>
                                <a href='https://github.com/CMPUT301F24throat/throat-events' target='_blank' rel='noreferrer'><b>PickMe APP</b></a>
                                <svg fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.656 162.656">
                                <g>
                                    <path d="M151.764,10.894c-14.522-14.522-38.152-14.525-52.676-0.008l0.003,0.003L76.112,33.872l10.607,10.605l22.983-22.988
                                        l-0.002-0.002c8.678-8.663,22.785-8.658,31.457,0.014c8.673,8.672,8.672,22.786,0,31.461l-34.486,34.484
                                        c-4.201,4.202-9.787,6.516-15.729,6.516c-5.942,0-11.529-2.314-15.73-6.516L64.605,98.052c7.035,7.035,16.389,10.91,26.338,10.91
                                        c9.949,0,19.303-3.875,26.335-10.91l34.487-34.484C166.284,49.043,166.284,25.413,151.764,10.894z"/>
                                    <path d="M52.96,141.162L52.96,141.162c-8.675,8.67-22.788,8.668-31.461-0.005c-8.673-8.675-8.673-22.791-0.001-31.465L55.98,75.21
                                        c8.675-8.674,22.789-8.674,31.462,0L98.05,64.604c-14.524-14.523-38.154-14.524-52.676,0L10.89,99.086
                                        c-14.519,14.523-14.519,38.154,0.001,52.678c7.263,7.262,16.801,10.893,26.341,10.892c9.536,0,19.074-3.629,26.333-10.887
                                        l0.002-0.001l22.984-22.99l-10.608-10.606L52.96,141.162z"/>
                                </g>
                                </svg>
                                <br />
                                赛事安排和抽签选择应用程序
                                <br />
                                <div className='subscript'>
                                    <i>Java, Firebase, Espresso, Jest</i>
                                </div>
                            </div>
                        </div>
                        <div className='category'>
                            <div className='header'>
                                技能特长
                            </div>
                            <div className='subheader'>
                                编程语言:
                                <br />
                                Python, Java, C/C++, JavaScript, TypeScript, HTML/CSS, C#, VB.NET, SQL, Rust
                            </div>
                            <div className='subheader'>
                                库/框架:
                                <br />
                                React, Node.js, Express.js, TensorFlow, Keras, SciKit Learn, Pandas, NumPy, Matplotlib, JUnit
                            </div>
                            <div className='subheader'>
                                编程工具:
                                <br />
                                Git, Docker, AWS, Android Studio, MongoDB, Visual Studio, PyCharm, Google Cloud
                            </div>
                            <div className='subheader'>
                                其他工具:
                                <br />
                                REST, Agile, 数据结构与算法, 关系数据库
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BouncingBalls count={10} />
        </div>

    )
}

export default HomeZh;