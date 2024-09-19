document.addEventListener('DOMContentLoaded', function() {
    let gameBoard = document.getElementById('game-board');
    let character = document.createElement('div');
    character.id = 'character';
    gameBoard.appendChild(character);

    document.addEventListener('keydown', function(event) {
        let top = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

        if (event.code === 'ArrowUp') {
            if (top > 0) { 
                character.style.top = top - 25 + 'px';
            }
        } else if (event.code === 'ArrowDown') {
            if (top < 175) { 
                character.style.top = top + 25 + 'px';
            }
        }
    });

    function createBlock() {
        let block = document.createElement('div');

        block.classList.add('block');
        block.style.top = Math.floor(Math.random() * 175) + 'px'; // ランダムな位置に配置
        block.style.left = '500px'; // 右端から生成
        gameBoard.appendChild(block);    
        console.log(block); // 追加

        let moveBlock = setInterval(function() {
            let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
            let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

            if (blockLeft < 70 && blockLeft > 50 && characterTop >= parseInt(block.style.top) && characterTop <= parseInt(block.style.top) + 50) {
                alert('Game Over');
                clearInterval(moveBlock);
                block.remove();
            }

            if (blockLeft <= 0) {
                clearInterval(moveBlock);
                block.remove();
            }

            block.style.left = blockLeft - 5 + 'px';
        }, 20);
    }

    setInterval(createBlock, 500); // 0.5秒ごとに新しいブロックを生成
});
