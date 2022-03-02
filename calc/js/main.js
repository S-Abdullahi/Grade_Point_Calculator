document.querySelector('button').addEventListener('click', keyButton)

const selectFirstCourseUnit = document.querySelector('#courseOneUnit')
const selectFirstCourseGrade = document.querySelector('#courseOneGrade')

const selectSecondCourseUnit = document.querySelector('#courseTwoUnit')
const selectSecondCourseGrade = document.querySelector('#courseTwoGrade')

const selectThirdCourseUnit = document.querySelector('#courseThreeUnit')
const selectThirdCourseGrade = document.querySelector('#courseThreeGrade')

const selectFourthCourseUnit = document.querySelector('#courseFourUnit')
const selectFourthCourseGrade = document.querySelector('#courseFourGrade')

const selectFifthCourseUnit = document.querySelector('#courseFiveUnit')
const selectFifthCourseGrade = document.querySelector('#courseFiveGrade')

const selectSixthCourseUnit = document.querySelector('#courseSixUnit')
const selectSixthCourseGrade = document.querySelector('#courseSixGrade')

const selectSeventhCourseUnit = document.querySelector('#courseSevenUnit')
const selectSeventhCourseGrade = document.querySelector('#courseSevenGrade')

const selectEightCourseUnit = document.querySelector('#courseEightUnit')
const selectEightCourseGrade = document.querySelector('#courseEightGrade')

const selectNinthCourseUnit = document.querySelector('#courseNineUnit')
const selectNinthCourseGrade = document.querySelector('#courseNineGrade')

const selectTenthCourseUnit = document.querySelector('#courseTenUnit')
const selectTenthCourseGrade = document.querySelector('#courseTenGrade')


function keyButton(){
    const unitOne = selectFirstCourseUnit.value
    const gradeOne = selectFirstCourseGrade.value
    const gradePointOne = unitOne * gradeOne
    document.querySelector('.gradePointOne').textContent = gradePointOne

    const unitTwo = selectSecondCourseUnit.value
    const gradeTwo = selectSecondCourseGrade.value
    const gradePointTwo = unitTwo * gradeTwo
    document.querySelector('.gradePointTwo').textContent = gradePointTwo


    const unitThree = selectThirdCourseUnit.value
    const gradeThree = selectThirdCourseGrade.value
    const gradePointThree = unitThree * gradeThree
    document.querySelector('.gradePointThree').textContent = gradePointThree

    const unitFour = selectFourthCourseUnit.value
    const gradeFour = selectFourthCourseGrade.value
    const gradePointFour = unitFour * gradeFour
    document.querySelector('.gradePointFour').textContent = gradePointFour

    const unitFive = selectFifthCourseUnit.value
    const gradeFive = selectFifthCourseGrade.value
    const gradePointFive = unitFive * gradeFive
    document.querySelector('.gradePointFive').textContent = gradePointFive

    const unitSix = selectSixthCourseUnit.value
    const gradeSix = selectSixthCourseGrade.value
    const gradePointSix = unitSix * gradeSix
    document.querySelector('.gradePointSix').textContent = gradePointSix

    const unitSeven = selectSeventhCourseUnit.value
    const gradeSeven = selectSeventhCourseGrade.value
    const gradePointSeven = unitSeven * gradeSeven
    document.querySelector('.gradePointSeven').textContent = gradePointSeven

    const unitEight = selectEightCourseUnit.value
    const gradeEight = selectEightCourseGrade.value
    const gradePointEight = unitEight * gradeEight
    document.querySelector('.gradePointEight').textContent = gradePointEight

    const unitNine = selectNinthCourseUnit.value
    const gradeNine = selectNinthCourseGrade.value
    const gradePointNine = unitNine * gradeNine
    document.querySelector('.gradePointNine').textContent = gradePointNine

    const unitTen = selectTenthCourseUnit.value
    const gradeTen = selectTenthCourseGrade.value
    const gradePointTen = unitTen * gradeTen
    document.querySelector('.gradePointTen').textContent = gradePointTen

    const totalCourseUnit = +unitOne + +unitTwo + +unitThree + +unitFour + +unitFive + +unitSix + +unitSeven + +unitEight + +unitNine +  +unitTen
    const totalGradePoint = gradePointOne + gradePointTwo + gradePointThree + gradePointFour + gradePointFive + gradePointSix + gradePointSeven + gradePointEight + gradePointNine + gradePointTen
    const gradePoint = totalGradePoint/totalCourseUnit

    document.querySelector('#totalCourseUnit').textContent = totalCourseUnit
    document.querySelector('#totalGradePoint').textContent = totalGradePoint
    document.querySelector('#gradePoint').textContent = gradePoint.toFixed(2)

    if(gradePoint > 4.5){
        document.querySelector('#comment').textContent = "Don't relent and keep aimig high. Keep it up"
        document.querySelector('#gradePoint').style.backgroundColor = '#38b000'
    }
        else if(gradePoint >= 4.0 && gradePoint < 4.49){
            document.querySelector('#comment').textContent = "You should be proud of yourself. Don't relax and keep pushing. Kudos!"
            document.querySelector('#gradePoint').style.backgroundColor = '#9ef01a'
        }
            else if(gradePoint > 3.5 && gradePoint < 4.0){
                document.querySelector('#comment').textContent = "Fasten your belt. You won't like to slip. So, head up!"
                document.querySelector('#gradePoint').style.backgroundColor = '#abff4f'
            }
                else if(gradePoint >= 2.5 && gradePoint <3.50){
                    document.querySelector('#comment').textContent = "You are some steps behind, so, don't give up. Yes! you're trying your best but you need to be more solid and focused. Don't limit yourself"
                    document.querySelector('#gradePoint').style.backgroundColor = '#f3de2c'
                }
                    else if(gradePoint < 2.5 ){
                        document.querySelector('#comment').textContent = "Your grade shouldn't define your potential. You have special in yourself and you can only unleash that potential if you believe in yourself and have grit to learn. Be proud of yourself"
                        document.querySelector('#gradePoint').style.backgroundColor = '#fb6107'
                    }
    if(totalCourseUnit === 0 && totalGradePoint === 0){
        document.querySelector('#gradePoint').textContent = '0'
    }
    
}

