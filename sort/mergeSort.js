const myArr = [4, 6, 1, 7, 2, 5, 3];

const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let i = j = 0;    
    // сравниваем два массива, поочередно сдвигая указатели
    while (i < arrFirst.length && j < arrSecond.length) {
        arrSort.push(
            (arrFirst[i] < arrSecond[j]) ?
                arrFirst[i++] : arrSecond[j++]
        );
    }    
    // обрабатываем последний элемент при разной длине массивов
    // и возвращаем один отсортированный массив
    return [
        ...arrSort,
        ...arrFirst.slice(i),
        ...arrSecond.slice(j)
    ];
};

const mergeSort = arr => {  
    if (!arr || !arr.length) {
        return null;
    }   
    if (arr.length <= 1) {
        return arr;
    }    

    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);  
    // Для новых массивов снова вызываем сортировку,
    // сливаем их и возвращаем снова единый массив
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};
    
mergeSort(myArr);
