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
    createCards(projects)
  })


// 

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

