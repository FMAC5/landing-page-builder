// ADD SECTION BUTTON -> SECTION CONTAINER + SECTION CONTAINER CLOSE
let addSectionButton = document.getElementById('addSectionButton');
let sectionContainer = document.getElementById('sectionContainer');
let sectionClose = document.getElementById('sectionClose');

    // ADD SECTION BUTTON -> SECTION CONTAINER
    addSectionButton.addEventListener('click',()=> {
        sectionContainer.classList.add('toggle');
    });

    // SECTION CONTAINER CLOSE
    sectionClose.addEventListener('click',()=> {
        sectionContainer.classList.remove('toggle');
    });

    sectionContainer.addEventListener('click',()=> {
        sectionContainer.classList.remove('toggle');
    });

// CONTENT CONTAINER + COLUMNS
let contentContainer = document.getElementById('contentContainer');
let columnOne = document.getElementById('columnOne');
let columnTwo = document.getElementById('columnTwo');
let columnThree = document.getElementById('columnThree');
let columnFour = document.getElementById('columnFour');

// MODAL MENU CONTAINER & modal MENU CLOSE
let modalMenuContainer = document.getElementById('modalMenuContainer');
let modalMenuClose = document.getElementById('modalMenuClose');

modalMenuClose.addEventListener('click', ()=> {
    modalMenuContainer.classList.remove('toggle');
    contentContainer.classList.remove('toggle');
})

// MODAL ELEMENTS 
let modalHeading = document.getElementById('modalHeading');
    let modalHeaderContainer = document.getElementById('modalHeaderContainer');
    let modalHeaderClose = document.getElementById('modalHeaderClose');
    let headerInput = document.getElementById('headerInput');
let modalText = document.getElementById('modalText');
let modalImage = document.getElementById('modalImage');
let modalButton = document.getElementById('modalButton');
let modalVideo = document.getElementById('modalVideo');
let modalForm = document.getElementById('modalForm');

    // COLUMN ONE 
    columnOne.addEventListener('click', ()=> {
        // SECTION CONTAINER CLOSE       
        sectionContainer.classList.remove('toggle');

        // ADD MAIN CONTAINER FOR DRAGGING
        let mainContainer = document.createElement('div');
        mainContainer.classList.add('mainContainer');
        mainContainer.draggable = 'true';
        contentContainer.appendChild(mainContainer);
        
        // DRAGGABLE 
        const draggables = document.querySelectorAll('.mainContainer');
        const containers = document.querySelectorAll('.contentContainer');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', ()=> {
                draggable.classList.add('dragging');
            })
            draggable.addEventListener('dragend', ()=> {
                draggable.classList.remove('dragging');
            })

            containers.forEach(container => {
                container.addEventListener('dragover', e => {
                    e.preventDefault();
                    const afterElement = getDragAfterElement(container, e.clientY);
                    const draggable = document.querySelector('.dragging');
                    if (afterElement == null) {
                        container.appendChild(draggable);
                    } else {
                        container.insertBefore(draggable, afterElement);
                    }
                })
            })
        })

        function getDragAfterElement (container, y) {
            const draggableElements = [...container.querySelectorAll('draggable:not(.dragging)')];
            
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect()
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child}
                } else {
                        return closest
                    }
            }, {offset: Number.NEGATIVE_INFINITY}).element;
        }
        // ADD CONTAINER
        let containerOne = document.createElement('div');
        containerOne.classList.add('containerOne');
        mainContainer.appendChild(containerOne);

        // ADD CONTAINER BOX
        let containerBoxOne = document.createElement('div');
        containerBoxOne.classList.add('containerBoxOne');
        containerOne.appendChild(containerBoxOne);

        // CONTAINER BUTTON -> MODAL MENU
        let modalMenuButton = document.createElement('i');
        modalMenuButton.innerHTML = '<span class="iconify" data-icon="carbon:add-filled"></span>';
        modalMenuButton.classList.add('modalMenuButton');
        containerBoxOne.appendChild(modalMenuButton);

        modalMenuButton.addEventListener('click', ()=> {
        modalMenuContainer.classList.add('toggle');
        contentContainer.classList.add('toggle');

        // MODAL
            // HEADER
            modalHeading.addEventListener('click', ()=> {
                modalHeaderContainer.classList.add('toggle');
                // HEADER INPUT
                setTimeout(()=> {
                headerInput.addEventListener('keydown', e => {
                    if (e.key == 'Enter') {
                        if (headerInput.value.length > 0) { 
                        let headervalue = document.createElement('input');
                        headervalue.textContent = headerInput.value;
                        headervalue.type = 'text';
                        headervalue.placeholder = headerInput.value;
                        headervalue.readOnly = 'true';
                        headervalue.classList.add('headervalue');
                        containerBoxOne.appendChild(headervalue);
                        modalHeaderContainer.classList.remove('toggle');
                        e.preventDefault();  

                            headervalue.addEventListener('click', ()=> {
                            modalHeaderContainer.classList.add('toggle');
                            containerBoxOne.removeChild(headervalue);
                            })
                        }
                        else
                            alert('Please Enter Valid Response');
                            e.preventDefault(); 
                    }
                })
                }, 0);

                // HEADER SUBMIT
                headerSubmit = document.getElementById('headerSubmit');
                setTimeout(()=> {
                headerSubmit.addEventListener('click', ()=> {
                        if (headerInput.value.length > 0) { 
                        let headervalue = document.createElement('input');
                        headervalue.textContent = headerInput.value;
                        headervalue.type = 'text';
                        headervalue.placeholder = headerInput.value;
                        headervalue.readOnly = 'true';
                        headervalue.classList.add('headervalue');
                        containerBoxOne.appendChild(headervalue);
                        modalHeaderContainer.classList.remove('toggle');

                            headervalue.addEventListener('click', ()=> {
                            modalHeaderContainer.classList.add('toggle');
                            containerBoxOne.removeChild(headervalue);
                            })
                        }
                        else
                            alert('Please Enter Valid Response');
                    })
                }, 0);
                // HEADER CLOSE
                setTimeout(()=> {
                modalHeaderClose.addEventListener('click', ()=> {
                    modalHeaderContainer.classList.remove('toggle');
                        let value = document.createElement('input');
                        value.textContent = headerInput.value;
                        value.type = 'text';
                        value.classList.add('headervalue');
                        value.placeholder = headerInput.value;
                        containerBoxOne.appendChild(value);

                            value.addEventListener('click', ()=> {
                            modalHeaderContainer.classList.add('toggle');
                            containerBoxOne.removeChild(value);
                            })
                })
                }, 0);
            })

        })
    })

    // COLUMN TWO 
    columnTwo.addEventListener('click', ()=> {
        // SECTION CONTAINER CLOSE       
        sectionContainer.classList.remove('toggle');

        // ADD MAIN CONTAINER FOR DRAGGING
        let mainContainer = document.createElement('div');
        mainContainer.classList.add('mainContainer');
        mainContainer.draggable = 'true';
        contentContainer.appendChild(mainContainer);
        
        // ADD CONTAINER
        let containerTwo = document.createElement('div');
        containerTwo.classList.add('containerTwo');
        mainContainer.appendChild(containerTwo);

        // ADD CONTAINER BOX TWOA
        let containerBoxTwoA = document.createElement('div');
        containerBoxTwoA.classList.add('containerBoxTwoA');
        containerTwo.appendChild(containerBoxTwoA);

        // ADD CONTAINER BOX TWOB
        let containerBoxTwoB = document.createElement('div');
        containerBoxTwoB.classList.add('containerBoxTwoB');
        containerTwo.appendChild(containerBoxTwoB);

        // CONTAINER BUTTON -> MODAL MENU
        let modalMenuButton2A = document.createElement('i');
        modalMenuButton2A.innerHTML = '<span class="iconify" data-icon="carbon:add-filled"></span>';
        modalMenuButton2A.classList.add('modalMenuButton');
        containerBoxTwoA.appendChild(modalMenuButton2A);

        let modalMenuButton2B = document.createElement('i');
        modalMenuButton2B.innerHTML = '<span class="iconify" data-icon="carbon:add-filled"></span>';
        modalMenuButton2B.classList.add('modalMenuButton');
        containerBoxTwoB.appendChild(modalMenuButton2B);

        modalMenuButton2A.addEventListener('click', ()=> {
        modalMenuContainer.classList.add('toggle');
        contentContainer.classList.add('toggle');
        })
        modalMenuButton2B.addEventListener('click', ()=> {
        modalMenuContainer.classList.add('toggle');
        contentContainer.classList.add('toggle');
        })
    })
