<script>

</script>

<template>
    <header id="header">
        <p class="typing-name">NABILA</p>

        <!--<div id="header-menu">
            <ul>
                <li><a href="#what-i-do">What I do</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#work">My Work</a></li>
                <li><a href="#contact-email">Contact</a></li>
            </ul>
        </div>-->

        <div id="header-themes">
            <ul>
                <li class="nav-menu-list dark-theme themeswitch" title="Dark Theme" data-theme="dark"><i
                        class="fas fa-moon"></i></li>
                <li class="nav-menu-list light-theme themeswitch" title="Light Theme" data-theme="light"><i
                        class="fas fa-sun"></i></li>
            </ul>
        </div>
    </header>

    <!--======================================== MENU ==========================================================-->
    <nav>
        <div id="menu-btn">
            <i class="fas fa-bars menu-btn" id="open-menu-btn"></i>
            <i class="fas fa-times close-btn" id="close-menu-btn"></i>
        </div>

        <div id="nav-menu">
            <ul>
                <li class="nav-menu-list"><router-link to="/" title="Home"><i class="fas fa-home"></i><span
                            class="nav-menu-other">Home</span></router-link></li>
                <li class="nav-menu-list"><router-link to="/blogs" title="Blog"><i class="fas fa-blog"></i><span
                            class="nav-menu-other">Blog</span></router-link></li>
                <li class="nav-menu-list"><router-link to="/podcast" title="Podcast"><i class="fas fa-podcast"></i><span
                            class="nav-menu-other">Podcast</span></router-link></li>
                <li class="nav-menu-list"><router-link to="/work" title="Work"><i class="fas fa-stream"></i><span
                            class="nav-menu-other">Work</span></router-link></li>
                <li class="nav-menu-list"><router-link to="/gallery" title="Gallery"><i class="fas fa-video"></i><span
                            class="nav-menu-other">Gallery</span></router-link></li>
                <li class="nav-menu-list"><router-link to="/socials" title="Socials"><i class="fas fa-user"></i><span
                            class="nav-menu-other">Socials & Links</span></router-link></li>
                <li class="nav-menu-list"><a href="mailto:nabilaabubakar333@gmail.com" title="E-mail"><i
                            class="fas fa-envelope"></i><span class="nav-menu-other">Send an E-mail</span></a></li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss">
/*========================== #80008004 #80008042=============================*/
nav {
    width: 5%;
    height: 100% !important;

    /*background: var(--linear-gradient-hover);*/
    background: rgba(255, 255, 255, .2);

    border: 1px solid rgba(255, 255, 255, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);

    position: fixed;

    cursor: pointer;

    h1 {
        cursor: pointer;
    }

    #menu-btn {
        margin-left: 20px;

        #close-menu-btn {
            display: none;
        }

        #open-menu-btn,
        #close-menu-btn {
            color: var(--white);

            font-size: 40px;
            margin-top: 5px;

            transition: var(--transition);

            #open-menu-btn:hover,
            #close-menu-btn:hover {
                /*color: var(--hover);*/
                transition: var(--transition);
            }
        }
    }


    ul {
        color: var(--white);

        height: 3300px;
        margin-top: 20px;

        transition: var(--transition);

        li {
            margin-bottom: 20px;
            font-size: 23px;

            cursor: pointer;

            a {
                color: var(--white);

                &:hover {
                    color: var(--hover);

                }
            }
        }

        .nav-menu-list {
            display: block !important;

            .nav-menu-other {
                display: none;
                cursor: pointer;

                &:hover {
                    color: var(--hover);

                }
            }
        }
    }
}


header ul li a {
    color: var(--white);
}

header ul li a:hover {
    color: var(--hover);
}

/*========================== HEADER =============================*/
header {
    width: 95%;
    height: 7%;

    left: 5%;
    top: 1%;

    font-size: 2rem;
    border-radius: 30px;

    /*background: var(--linear-gradient-hover);*/
    background: rgba(255, 255, 255, .2);

    border: 1px solid rgba(255, 255, 255, .3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);

    display: flex;
    justify-content: space-evenly;

    position: fixed;

    ul {
        display: flex;

        font-size: 1.2rem;
        column-gap: 2.5rem;
    }

    /*==========================DARK/LIGHT THEME TOGGLE=============================*/
    #header-themes {
        ul li {
            font-size: 1.5rem;
        }

        /*🌞🌙🌟*/
        .dark-theme,
        .light-theme {
            transition: var(--transition);
        }

        .dark-theme i {
            display: none;
        }

        .dark-theme:hover,
        .light-theme:hover {
            color: var(--hover);
            cursor: pointer;
        }
    }
}

/*========================== RESPONSIVE MEDIA =============================*/
@media screen and (max-width: 1024px) {
    header {
        width: 100%;
        height: 7.5%;
        left: 0;

        p {
            margin-left: 20% ! important;
        }

        #header-menu {
            display: none;
        }
    }

    nav {
        height: 0;

        #nav-menu {
            display: none;
        }
    }
}

@media screen and (min-width: 200px) and (max-width: 500px) {

    #open-menu-btn,
    #close-menu-btn {
        color: var(--white);
        font-size: 30px;
        cursor: pointer;
    }
}
</style>