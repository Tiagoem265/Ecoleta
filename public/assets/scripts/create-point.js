function populateUfs( )
 {            
  const ufSelect = document.querySelector("select[name=uf]")
  
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json())
  .then( states => {
      for(  const state of states) {
          ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
      
  })  
}

populateUfs ()


function getCities(event) {
  const citySelect = document.querySelector("select[name=city]")
  const stateInput = document.querySelector("input[name=state]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = ""
  citySelect.disabled = true

  fetch(url)
  .then( res => res.json() )
  .then( cities => {
      
      for( const city of cities ) {
          citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

      }

    citySelect.disabled = false
  } )
}


document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)

  // Intens de coleta 
  // pegar todos os li s
const ItemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of ItemsToCollect) {
  item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")


let selectedItems = []

  function handleSelectedItem(event) {
 const itemli = event.target
  // adiciona ou remover uma classe com JC//
  itemli.classList.toggle("selected")


    const itemId= event.target.dataset.id



    // verificar se existe items selecionados , se sim 
    // pergar os itens selecionados 

    const  alreadySelected = selectedItems.findIndex( item => { 
      const itemFound = item === itemId
     return itemFound 
    }) 




    // se ja esrtiver selecionado 
    
    if(alreadySelected >= 0 ) {

       const filteredItems = selectedItems.filter(item =>{
         const itemIsDifferent= item != temId //flase// 
          return itemIsDifferent
   })
      
     selectedItems =  filteredItems   
  } else  {

    selectedItems.push(itemId)
  }
   // atualizar  o campo escondido com  os items selecionados
   collectedItems.value  = selectedItems
  } 
   