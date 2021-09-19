const Postlar = [
    {id:3,icerik:'test 1', yazar:'yazar1'},
    {id:1,icerik:'test 2', yazar:'yazar2'},
    {id:2,icerik:'test 3', yazar:'yazar3'},
    {id:4,icerik:'test 4', yazar:'yazar4'}
]


function postEkle(post){

    new Promise((resolve,reject)=>{

        if(post){
            Postlar.push(post);
            resolve('Post Eklendi!');
        }else{
            reject('Bir Hata Oluştu!');
        }
    });

}

function postSirala(postListesi){
    console.log(postListesi);

    new Promise((resolve,reject)=>{
        if(postListesi){
            for(let i=0; i < postListesi.length-1; i++){
                if(postListesi[i].id > postListesi[i+1].id){
                    let left = postListesi[i];
                    let right = postListesi[i+1];
                    postListesi[i] = right;
                    postListesi[i+1] = left;
                }
            }
            resolve(postListesi);
        }else{
            reject('Sıralama esnasında bir hatayla karşılaşıldı!');
        }
    })
    
}

//postEkle({id:17,icerik:'alsdşalsdşlsd',yazar:'yazaaar'});
//postSirala(Postlar);

async function calistir(){
    try{
        await postEkle({id:17,icerik:'alsdşalsdşlsd',yazar:'yazaaar'});
        await postSirala(Postlar);
    }catch(error){
        console.log(error);
    }
}

calistir()