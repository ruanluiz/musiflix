const playButtons = document.getElementsByClassName('play-button')

for (const button of playButtons) {
   button.addEventListener("click", (event) => {
      const buttonClick = event.currentTarget
      const dataId = buttonClick.getAttribute("data-id")
     
      const allAudios = document.getElementsByTagName('audio')
      for (const item of allAudios) {
         

         const audioId = item.getAttribute('data-audio')
         if (audioId != dataId) {
            item.pause()
            item.currentTime = 0
         }
      }
      for (const button of playButtons) {
         button.innerHTML = 'Play'
         
      }

      const search = `[data-audio='${dataId}']`
      const audio = document.querySelector(search)
      if (audio.paused) {
         audio.play()
         buttonClick.innerHTML = 'Pause'
      } else {
         audio.pause()
         buttonClick.innerHTML = 'Play'
      }
     
   }) 
}