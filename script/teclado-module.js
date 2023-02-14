export function shortcuts(keyEvent){
    console.log(keyEvent)
    console.log(keyEvent.key," : ",keyEvent.keyCode  );
    console.log("alt: ",keyEvent.altKey);
    console.log("ctlr: ",keyEvent.ctrlKey);
    console.log("shift: ",keyEvent.shiftKey);

    if(keyEvent.key === "a" && keyEvent.ctrlKey){
        alert("Shortcut: ctrl+a")
    }

    if(keyEvent.key === "s" && keyEvent.altKey){
        alert("Shortcut: alt+s")
    }
}