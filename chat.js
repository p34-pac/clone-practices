const newCht = function(page){
    app.innerHTML = `
    <div class="chat-room">
    <div class="top-nav fd-col fl-st">
        <div class="tH">
            <h1 id="heading">New Chat</h1>
            <a href="#" id="cancel" onclick="changeChat()">Cancel</a>

        </div>

        <div class="search">
            <input type="search" id="search" placeholder="Search">
        </div>
    </div>
    
        <div class="cl hp-bn">
            <div class="options">

                    <a class="new-contact" onclick="newContact()">New contact</a>
                
                <a class="new-group" onclick="newGroup()">New group</a>
            </div>
            <div class="list">
                <div class="contacts">
                    <div class="contact-head">
                        <p id="recently">Recently contacted</p>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-pic"></div>
                        <div class="contact-info">
                            <b class="contact-name">Contact name</b>
                            <b class="contact-bio"> Love God</b>
                        </div>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-pic"></div>
                        <div class="contact-info">
                            <b class="contact-name">Contact name</b>
                            <b class="contact-bio"> Love God</b>
                        </div>
                    </div>
                    <div class="contact-head">
                        <p id="a">A</p>
                    </div>
                </div>
                <div class="accord">
                    <a href="#" id="a">a</a>
                    <a href="#" id="b">b</a>
                    <a href="#" id="c">c</a>
                    <a href="#" id="d">d</a>
                    <a href="#" id="e">e</a>
                    <a href="#" id="f">f</a>
                    <a href="#" id="g">g</a>
                    <a href="#" id="h">h</a>
                    <a href="#" id="i">i</a>
                    <a href="#" id="j">j</a>
                    <a href="#" id="k">k</a>
                    <a href="#" id="l">l</a>
                    <a href="#" id="m">m</a>
                    <a href="#" id="n">n</a>
                    <a href="#" id="o">o</a>
                    <a href="#" id="p">p</a>
                    <a href="#" id="q">q</a>
                    <a href="#" id="r">r</a>
                    <a href="#" id="s">s</a>
                    <a href="#" id="t">t</a>
                    <a href="#" id="u">u</a>
                    <a href="#" id="v">v</a>
                    <a href="#" id="w">w</a>
                    <a href="#" id="x">x</a>
                    <a href="#" id="y">y</a>
                    <a href="#" id="z">z</a>
                    <a href="#" id="unknown">#</a>
                </div>
            </div>
        </div>
            
            
    
</div>
    `
}

function newChat(e){
    page.change(new newCht);
    // e.preventDefault()
}

const newcont = function(page){
    app.innerHTML = `
    <div class="chat-room">
            <div class="top-nav flex w-100">
                <div class="flex fl-al-ce fl-sb ml-5 bold">
                    <a href="#" id="cancel" onclick="newChat()">Cancel</a>
                    <h1 id="title">New Contact</h1>
                    <a href="#" id="save" class="muted">save</a>
                    
                </div>
            </div>
            <div class="nci cl hp-bn">
                <div id="names" class="flex fd-col">
                    <div class="firstname">
                        <input type="text" id="firstname" placeholder="First Name">
                    </div>
                    <div class="lastname">
                        <input type="text" id="lastname" placeholder="Last Name">

                    </div>
                </div>
                <div id="number">
                    <div class="top-num">
                        <h3>Phone</h3>
                        <a href="#" id="country">Nigeria</a>
                    </div>
                    <div class="phone-number">
                        <a href="#" id="contact-type">mobile</a>
                        <div class="num">
                            <a href="#" id="c-code">+234</a>
                            <input type="number" id="number" placeholder="Phone" onkeydown="phoneType()">
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    `
}
function newContact(e){
    page.change(new newcont);
    e.preventDefault()
}
const Grouping = function(page){
    app.innerHTML = `
    <div class="chat-room">
    <div class="top-nav fd-col fl-st">
        <div class="tH">
            <h1 id="heading">New Group</h1>
            <a href="#" id="cancel" onclick="newChat()">Cancel</a>

        </div>

        <div class="search">
            <input type="search" id="search" placeholder="Search">
        </div>
    </div>
    
        <div class="cl hp-bn">
            <div class="options">
                <div class="selection">
                    <div class="contact-selected">
                        <div class="selected-pic"></div>
                        <b class="selected-name ">Contact name</b>

                    </div> 
                </div>
            </div>
            <div class="list">
                <div class="contacts">
                    <div class="contact-head">
                        <p id="a">A</p>
                    </div>
                    
                    <div class="contact-card" id="Contact-name">
                        <div class="contact-pic"></div>
                        <div class="contact-info">
                            <b class="contact-name">Contact name</b>
                            <b class="contact-bio"> Love God</b>
                        </div>
                        <div class="contact-select">
                            <div class="checkbox">
                                <div class="select not-checked"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-card" >
                        <div class="contact-pic"></div>
                        <div class="contact-info">
                            <b class="contact-name">Contact name</b>
                            <b class="contact-bio"> Love God</b>
                        </div>
                        <div class="contact-select">
                            <div class="checkbox">
                                <div class="select not-checked"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="accord">
                    <a href="#" id="a">a</a>
                    <a href="#" id="b">b</a>
                    <a href="#" id="c">c</a>
                    <a href="#" id="d">d</a>
                    <a href="#" id="e">e</a>
                    <a href="#" id="f">f</a>
                    <a href="#" id="g">g</a>
                    <a href="#" id="h">h</a>
                    <a href="#" id="i">i</a>
                    <a href="#" id="j">j</a>
                    <a href="#" id="k">k</a>
                    <a href="#" id="l">l</a>
                    <a href="#" id="m">m</a>
                    <a href="#" id="n">n</a>
                    <a href="#" id="o">o</a>
                    <a href="#" id="p">p</a>
                    <a href="#" id="q">q</a>
                    <a href="#" id="r">r</a>
                    <a href="#" id="s">s</a>
                    <a href="#" id="t">t</a>
                    <a href="#" id="u">u</a>
                    <a href="#" id="v">v</a>
                    <a href="#" id="w">w</a>
                    <a href="#" id="x">x</a>
                    <a href="#" id="y">y</a>
                    <a href="#" id="z">z</a>
                    <a href="#" id="unknown">#</a>
                </div>
            </div>
        </div>
            
            
    
</div>
    `
    document.querySelector('.list').addEventListener('click', select)
}
function newGroup(e){
    page.change(new Grouping);
    // e.preventDefault()
}
let fName = document.getElementById('firstname');
let lName = document.getElementById('lastname');
let number = document.getElementById('number');
function phoneType(){
        if(fName.value !== '' && lName.value !== '' && number.value !== ''){
            let save = document.getElementById('save');
            save.style.color = 'blue';
            save.style.cursor = 'pointer';
        
        
    }

}


function muted(){
    if(fName.value == '' && lName.value == '' && number.value == ''){
            let save = document.getElementById('save');
            save.style.color = 'grey';
            save.style.cursor = 'not-allowed';
    }
}

        

        function select(e){
            let selection = document.querySelector('.selection');
            let contactCard = e.target.parentElement.parentElement.parentElement;
                let contactName = contactCard.children[1].children[0];
                
                let notChecked = e.target.classList.contains('not-checked')
                let checked = e.target.classList.contains('checked')
            if(notChecked){
                
                e.target.classList.remove('not-checked');
                e.target.classList.add('checked')
                
                console.log(contactName.textContent)
                let contactSelected = document.createElement('div');
                contactSelected.className = 'contact-selected';
                contactSelected.id = contactName.textContent;
                let child = ` 
                    <div class="selected-pic"></div>
                    <b class="selected-name ">${contactName.textContent}</b>
                `
                contactSelected.innerHTML = child;
                selection.appendChild(contactSelected)
                // <!-- document.querySelector('.select').
            }else if(checked){
                // contactCard = e.target.parentElement.parentElement.parentElement;
                // contactName = contactCard.children[1].children[0];

                e.target.classList.remove('checked');
                e.target.classList.add('not-checked')
            //     let children = selection.children;
            //     let theContactName = `${contactName.textContent}`
            //     let child = selection.children
            //     let id = child[1].id;
            //     let element;
            //     let theName;
            //     for (const key in children) {
            //         if (Object.hasOwnProperty.call(children, key)) {
            //             element = children[key];
            //             let name = element.children[1].textContent
            //             theName = `${name}`                   
            //         }
            //     }
            //     if(theName == theContactName){
                            

            //         let toRemove = document.getElementById(id)
            //         let cID = contactCard.id.split('-')
            //         let mID = id.split(' ')
            //         let Mit;
            //         let Cit;
            //         mID.forEach(item =>{
            //             console.log(`${item}`)
            //             Mit = `${item}`
            //         })
            //         cID.forEach(item =>{
            //             console.log(`${item}`)
            //             Cit = `${item}`
            //         })
            //         console.log(Mit == Cit)
            //         if(Mit == Cit){
            //             selection.remove(toRemove)
            //         }
                    
            //     }
            //     console.log(selection.children)
        }
    }

    
    
    
    function sendMessage(){
        let messageText = document.getElementById('message-input-box').value;
        let moment = new Date()
        let hr = moment.getHours()
        let min = moment.getMinutes()
        let date = moment.getDate()
        let month = moment.getMonth();
        month += 1;
        let yr = moment.getFullYear();
        let sentTime =`${hr}:${min} ${date}-${month}-${yr}`

        let messageSent = {
            messageText,
            sentTime
            // fromUser
        }
        if(messageText !== ''){
            let messageSentDiv = document.createElement('div');

            messageSentDiv.classList = 'message sent'
            messageSentDiv.innerHTML = `
                <div id="sent">
                    <div id="message-sent">
                        <b id="m-text">${messageText}</b>
                        <b id="m-time">${hr}:${min}</b>
                    </div>
                </div>
            `
            document.querySelector('.chat-box').appendChild(messageSentDiv);
            document.getElementById('message-input-box').value = ''

        }

    }

    