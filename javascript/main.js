// API Card Call

// This was the work of Joe Keohan and not my own. He is much smarter than I am.

let originalURL = 'https://docs.google.com/spreadsheets/d/1Xsouj8zOSQHX0Y-iL3IvBJVg55WxV0FOzMDVx-8sdtg/edit#gid=0'

let id = '1Xsouj8zOSQHX0Y-iL3IvBJVg55WxV0FOzMDVx-8sdtg'

let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

fetch(source)
  .then(res => res.json())
  .then(data => {
    console.log('this id data.feed.entry', data.feed.entry)
    let projects = data.feed.entry.map(d => {
      return {
        title: d.gsx$title.$t,
        image: d.gsx$image.$t,
        description: d.gsx$description.$t,
      }
    })
    console.log('this is  projects', projects)
    createCards(projects)
  })


class Card {
  constructor(obj) {
    this.title = obj.title
    this.image = obj.image
    this.description = obj.description
    this.link = obj.link
  }

  render() {
    const col = document.createElement('div')
    col.classList.add('col', 's12', 'm3');

    const card = document.createElement('div')
    card.classList.add('card');

    const cardImage = document.createElement('div')
    cardImage.classList.add('card-image');

    const image = document.createElement('img')
    image.setAttribute('src', this.image)

    const link = document.createElement('a')
    link.setAttribute('href', this.link)

    const cardTitle = document.createElement('a')
    cardTitle.setAttribute('href', this.title)
    cardTitle.classList.add('card-title');
    cardTitle.innerText = this.title

    const cardContent = new CardContent(this.description)
    cardImage.appendChild(image)
    card.appendChild(cardTitle)
    card.appendChild(cardImage)
    card.appendChild(link)

    card.appendChild(cardContent.render())
    col.appendChild(card)

    return col
  }
}

class CardContent {
  constructor(desc) {
    this.desc = desc
  }
  render() {
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content');

    const paragraph = document.createElement('p')
    paragraph.innerText = this.desc

    cardContent.appendChild(paragraph)
    return cardContent
  }
}
function createCards(projects) {
  const projectDiv = document.querySelector('#projects')
  projects.forEach(obj => {
    let card = new Card(obj)
    console.log('this is card', card)
    projectDiv.appendChild(card.render())
  })

}
