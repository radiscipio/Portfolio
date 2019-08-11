// API Card Call

let originalURL = 'https://docs.google.com/spreadsheets/d/1Xsouj8zOSQHX0Y-iL3IvBJVg55WxV0FOzMDVx-8sdtg/edit#gid=0'

let id = '1Xsouj8zOSQHX0Y-iL3IvBJVg55WxV0FOzMDVx-8sdtg'

let source = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`

fetch(source)
  .then(res => res.json())
  .then(data => {
    console.log('this is  data.feed.entry', data.feed.entry);
    let projects = data.feed.entry.map(d => {
      return {
        title: d.gsx$title.$t,
        image: d.gsx$image.$t,
        description: d.gsx$description.$t
      }
    })
    conosle.log('this is projects', projects)
    createSlide(projects)
  });

  class Slide {
    constructor(obj) {
      this.title = obj.title
      this.image = obj.image
      this.description = obj.description
    };
    render() {
      const slide = document.createElement('div');
      slide.addClass('carousel-item');
      // slide.addClass('active');

      const image = document.createElement('img');
      image.addClass('d-block');
      image.addClass('w-100');
      image.setAttribute('src', this.image);

      const slideTitle = document.createElement('span');
      slideTitle.classList.add('slide-title');
      slideTitle.innertext = this.title

      const slideContent = new CardContent(this.description)
      console.log('this is the content', slideContent)
      slide.appendChild(image)
      image.appendChild(slideTitle)

      card.appendChild(slideContent.render())
    }
  }

function createSlide(projects) {
  const carouselDiv = document.querySelector('.carousel-inner')
  carousel-inner.forEach(obj => {
    let slide = new Slide(obj)
    console.log('this is the slide', slide)
    carouselDiv.appendChild(slide.render())
  })
}
