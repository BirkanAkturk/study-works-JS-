/* Mantıksal operatörler

&& : ve
|| : veya
! değil
*/
  // ehliyet alma örneği
  // gereklilikler: 18 yaş üstü ve 3000 tl ve sağlıklı olmak.

  let yas = 25;
  let para = 3500;
  let saglikliMi= false ;
  console.log(yas>18 && para>3000 && saglikliMi==true); // bir şart sağlanmadığığ için yanıt false olacaktır.


  console.log(5>3 || 2<1); // ikisinden biri doğru olduğu için yanı true olacaktır.

  console.log(!(5>3)); // ünlem değildir dediği için true olanı false getirecektir.
  