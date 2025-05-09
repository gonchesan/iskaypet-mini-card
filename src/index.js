const button = $('#btn-buy');
button.on('click', () => {
  button.toggleClass('card__button--primary');
  button.toggleClass('card__button--secondary');
});
