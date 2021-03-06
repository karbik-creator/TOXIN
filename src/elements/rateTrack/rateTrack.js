import './rateTrack.scss'

const rateTracks = document.querySelectorAll('.rate-track');
let rateTrackActive,
rateTrackValue=0,
rateTrackItemsContainer;
if(rateTracks.length>0){
  initRateTracks();
}

function initRateTracks(){
  for (let index = 0; index < rateTracks.length; index++) {
    const rateTrack = rateTracks[index];
    initRateTrack(rateTrack);
  }
}

function initRateTrack(rateTrack){
  initRateTrackVars(rateTrack);
  setRateTrackActiveWidth();
  if(rateTrack.classList.contains('rating_set')){
    setRating(rateTrack);
  }

}

function initRateTrackVars(rateTrack){
  rateTrackActive = rateTrack.querySelector('.__icons-active');
  rateTrackItemsContainer = rateTrack.querySelector('.rate-track__input-list');

}

function setRateTrackActiveWidth(index = rateTrackValue) {
  const rateTrackActiveWidth = index/0.05;
  rateTrackActive.style.width = `${rateTrackActiveWidth}%`
  
}

function setRating(rateTrack) {
  const ratingItems = rateTrack.querySelectorAll('.rate-track__item');
  for (let index = 0; index < ratingItems.length; index++) {
    const ratingItem = ratingItems[index];
    ratingItem.addEventListener('mouseenter', function (e) {
      initRateTrackVars(rateTrack);
      setRateTrackActiveWidth(ratingItem.value);
    })
    rateTrackItemsContainer.addEventListener('mouseleave', function (e) {
      setRateTrackActiveWidth();
    })
    ratingItem.addEventListener('click', function (e) {
      initRateTrackVars(rateTrack);
      setRateTrackActiveWidth(ratingItem.value);
      rateTrackValue = ratingItem.value;
    })
    ratingItem.addEventListener('focus', function (e) {
      initRateTrackVars(rateTrack);
      setRateTrackActiveWidth(ratingItem.value);
      rateTrackValue = ratingItem.value;
    })
  }
}