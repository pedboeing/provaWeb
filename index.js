function generateInfoSection(estadoName) {
  
    estadoName.forEach(estadoName => {

        const li = document.createElement('li')
        li.id = "list-estado"
        li.textContent = `${estadoName}`
    
        const section = document.querySelector('main')
    
        section.appendChild(li)

    });
    
}

async function getEstadosData() {

    try {

      const data = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
  
      const jsonData = await data.json()

      console.log(jsonData)
  
      generateInfoSection(jsonData)

    } catch (error) {

      console.error(error)

    }

}


document.addEventListener('DOMContentLoaded', function () {

    getEstadosData()

})