# Модальные окна
## Usage
### HTML

 ```html
1. button
<div class="container" id="about">
			<button class="more"> Узнать больше</button>
		</div>
```
 ```html
2. Modal
	<div class="overlay fade">
		<div class="popup">
			<div class="popup-close">&times;
			</div>
			<div class="popup-title">
				Форма обратной связи</div>
			<div class="popup-form">
				<form action="#" class="main-form">
					<div class="popup-form-header">
						Узнайте больше о своём отдыхе
					</div>
					<label class="popup-form__label" for="phone">
						Введите ваш номер телефона:
					</label>
					<input class="popup-form__input" name="phone" type="tel" required placeholder="+7(978) 973 33 45">
					<button class="button popup-form__btn">
						Оставить заявку!
					</button>
				</form>
			</div>
		</div>
	</div>
```

### JS
  1. При помощи querySelector получить со страницы кнопку '.more', само модально окно с классом overlay и крестик document.querySelector('.popup-close').
  ```javascript
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');
```
  
  2. Открытие модального окна. Повесил обработчи событий на кнопку, что при клике на эту кнопку "overlay" должен изменять свои стили overlay.style.display = "block" принимает блочную модель, так же применяется анмация прописанная в css: (при помощи "this" обращаемся к кнопке непосредственно на которую нажали) this.classList.add('more-splash') Добавляем новый class прописанный в стилях анимация, для блокировки скролла при открытии модального окна document.body.style.overflow = 'hidden' из стилей.
```javascript
  more.addEventListener('click', function() {
        overlay.style.display = "block";
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
  ```
  3. Закрытие модального окна, на "close" навесить обработчик событий клика и выполняются обратные операции как в открытии окна, только стили заменить с block на none, а class удаляем more.classList.remove('more-splash'). Отменить блокировку скроллинга при нажатии на крестик document.body.style.overflow = ''.
```javascript
 close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
  ```
