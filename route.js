    let app = document.querySelector('.app');
    const PageState = function() {
        let currentState = new chatState(this);

    
        this.init = function() {
            this.change(new chatState);
        }
    
        this.change = function(state) {
            currentState = state;
        }
    };
    
    const chatState = function(page){
        app.innerHTML = `
            <div class="chats">
                <div class="top-nav">
                    <div class="heading">
                        <a class="detailed" id="edit">Edit</a>
                        <b class="title" id="chats">CHATS</b>
                    </div>
                    <div class="top-menu">
                        <img src="./icons8-search-96.png" alt="" >
                        <img src="./inbox-settings--v2.png" alt="" title="New Chat" id="new-chat" onclick='newChat()'>
                        <img src="./sidebar.png" alt="">
                        <img src="./menu.png" alt="">

                    </div>
                </div>
                <div class="cl">
                    <div class="chat-card" onclick="changeCroom()">
                        <div id="chat-pic"></div>
                        <div class="message-details">
                            <div class="chat-name">
                                <b>Paulo</b>
                            </div>
                            <div class="message-info">
                                <div class="message-text">
                                    <p>hi there</p>
                                </div>
                                <div id="m-time">
                                    <p>19:50 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="bottom-nav">
                    <div class="bottom-menu">
                        <div class="menus" id="calls" onclick="changeCall()">
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus" id="status" onclick="changeStatus()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus active" id="chat" >
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus" id="groups" onclick="changeGroup()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus" id="settings" onclick="changeSettings()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                    </div>
                </div>
            </div>
        `
    }

    const statusState = function(page){
        app.innerHTML = `
        <div class="status">
        <div class="top-nav">
            <div class="heading">
                <a class="detailed" id="privacy">Privacy</a>
                <b class="title" id="chats">STATUSES</b>
            </div>
            <div class="top-menu">
                <img src="./icons8-search-96.png" alt="">
                <img src="./inbox-settings--v2.png" alt="">
                <img src="./sidebar.png" alt="">
                <img src="./menu.png" alt="">

            </div>
        </div>
        <div class="cl">
            
            
        </div>
        <div class="bottom-nav">
            <div class="bottom-menu">
                <div class="menus" id="calls" onclick="changeCall()">
                    <img src="./icons8-search-96.png" alt="">
                </div>
                <div class="menus active" id="status">
                    <img src="./icons8-search-96.png" alt="">

                </div>
                <div class="menus " id="chat" onclick="changeChat()">
                    <img src="./icons8-search-96.png" alt="">
                </div>
                <div class="menus" id="groups"  onclick="changeGroup()">
                    <img src="./icons8-search-96.png" alt="">

                </div>
                <div class="menus" id="settings" onclick="changeSettings()">
                    <img src="./icons8-search-96.png" alt="">

                </div>
            </div>
        </div>
    </div>
        `;
    }

    const callsState = function(page){
        app.innerHTML = `
        <div class="calls">
                <div class="top-nav">
                    <div class="heading">
                        <a class="detailed" id="edit">New</a>
                        <b class="title" id="chats">CALLS</b>
                    </div>
                    <div class="top-menu">
                        <img src="./icons8-search-96.png" alt="">
                        <img src="./inbox-settings--v2.png" alt="">
                        <img src="./sidebar.png" alt="">
                        <img src="./menu.png" alt="">

                    </div>
                </div>
                <div class="cl">
                    
                    
                </div>
                <div class="bottom-nav">
                    <div class="bottom-menu">
                        <div class="menus active" id="calls">
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus" id="status" onclick="changeStatus()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus" id="chat" onclick="changeChat()">
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus" id="groups" onclick="changeGroup()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus" id="settings" onclick="changeSettings()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                    </div>
                </div>
            </div>
        `
    }
    const groupsState = function(page){
        app.innerHTML = `
        <div class="groups">
                <div class="top-nav">
                    <div class="heading">
                        <a class="detailed" id="edit">New</a>
                        <b class="title" id="chats">GROUPS</b>
                    </div>
                    <div class="top-menu">
                        <img src="./icons8-search-96.png" alt="">
                        <img src="./inbox-settings--v2.png" alt="">
                        <img src="./sidebar.png" alt="">
                        <img src="./menu.png" alt="">

                    </div>
                </div>
                <div class="cl">
                    
                </div>
                <div class="bottom-nav">
                    <div class="bottom-menu">
                        <div class="menus" id="calls" onclick="changeCall()">
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus" id="status" onclick="changeStatus()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus " id="chat" onclick="changeChat()">
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus active" id="groups">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus" id="settings" onclick="changeSettings()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                    </div>
                </div>
            </div>
        `
    }
    const settingsState = function(page){
        app.innerHTML = `
        <div class="settings">
                <div class="top-nav">
                    <div class="heading">
                        <b class="title" id="chats">SETTINGS</b>
                    </div>
                    <div class="top-menu">
                        <img src="./icons8-search-96.png" alt="">
                        <img src="./inbox-settings--v2.png" alt="">
                        <img src="./sidebar.png" alt="">
                        <img src="./menu.png" alt="">

                    </div>
                </div>
                <div class="cl">
                </div>
                <div class="bottom-nav">
                    <div class="bottom-menu">
                        <div class="menus" id="calls" onclick="changeCall()">
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus" id="status" onclick="changeStatus()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus " id="chat" onclick="changeChat()">
                            <img src="./icons8-search-96.png" alt="">
                        </div>
                        <div class="menus" id="groups" onclick="changeGroup()">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                        <div class="menus active" id="settings">
                            <img src="./icons8-search-96.png" alt="">

                        </div>
                    </div>
                </div>
            </div>
        `
    }

    const chatRoomState = function(page){
        app.innerHTML = `
        <div class="chat-room">
            <div class="top-nav">
                
                <div class="profile">
                    <div class="back" onclick="changeChat()">
                        <p>⪻</p>
                    </div>
                    <div class="profile-info">
                        <div href="#" id="dp">
                            <div class="c-pic"></div>
                            <div class="c-name"><p>user <span class="active-status online">online</span></p></div>
                        </div>
                    </div>
                </div>
                <div class="top-menu">
                    <img src="./icons8-search-96.png" alt="">
                    <img src="./inbox-settings--v2.png" alt="">
                    <img src="./sidebar.png" alt="">
                    <img src="./menu.png" alt="">
    
                </div>
            </div>
            
                <div class="chat-box">
                    
                    <div class="message sent">
                        <div id="sent">
                            <div id="message-sent">
                                <b id="m-text">hi there how are you doing hope you are doing great that is nice</b>
                                <b id="m-time">19:05 AM</b>
                            </div>
                        </div>
                    </div>
                    <div class="message received">
                        <div id="received">
                            <div id="message-received">
                                <b id="m-text">hi there</b>
                                <b id="m-time">19:05 AM</b>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="bottom-nav">
            <input type="text" id="message-input-box" placeholder="Type message here!">
            <button id="btn-send">send</button>
            </div>
        </div>
        `
    }

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init()




function changeChat(e){
    page.change(new chatState);
    e.preventDefault()
}
function changeStatus(e){
    page.change(new statusState);
    e.preventDefault()
}
function changeCall(e){

    page.change(new callsState);
    e.preventDefault()
}
function changeGroup(e){
    page.change(new groupsState);
    e.preventDefault()
}
function changeSettings(e){
    page.change(new settingsState);
    e.preventDefault()
}
function changeCroom(e){
    page.change(new chatRoomState);
    e.preventDefault()
}