function createMetrics(text){
	if (!text || text == undefined) throw `The text is empty or undefined!!`;
	try{
	let index_track1;
	let word_array = [];
	let l_letter_count = 0;
	let l_nonletter_count = 0;
	let l_vowel_count = 0;
	let l_consonant_count = 0;
	let l_word_count = 0;
	let l_longword_count = 0;
	let l_str_lowercase = text.toLowerCase();
	let corr_str = l_str_lowercase.replace(/'/g,'');
	let index_track = [];
	let result = new Object();
	
    for (let i=0; i < corr_str.length; i++)
    {
        let l_element = corr_str.charAt(i);
		if(l_element.match(/[a-z]/))
		{
			 l_letter_count++;	 
			 if(l_element.match(/[aeiou]/))
			 {
				 l_vowel_count++;		
			 }
			 else
			 {
				 l_consonant_count++;
			 }
			 index_track.push(i);
		}
		else
		{ 
			if(index_track !== index_track1 && index_track.length !== 0)
			{
			let word = corr_str.substring(index_track[0],index_track[index_track.length-1]+1);
			word_array.push(word);
			index_track1 = index_track;
			index_track = [];
			}
			l_nonletter_count++;	
		}
			
	}

	l_word_count = word_array.length;
	let l_uniqueword_set = new Set(word_array);
	let unique_wordsarray = ([...l_uniqueword_set]);
	let l_uniqueword_count = unique_wordsarray.length;
	let sum =0;
	word_array.forEach(element=>{
		sum+=element.length;
		if(element.length>=6)
		{
			l_longword_count++;
		}
	});
	let l_averageWordLength = sum/word_array.length;
    var word_occurancesobj = new Object();
    for (let j=0; j < ([...unique_wordsarray]).length; j++)
    {
		let count = 0;
        let key = unique_wordsarray[j];
        for (let k=0; k < word_array.length; k++)
        {
            if(word_array[k] == key )
            {
                count++;
            } 
        } 
		word_occurancesobj[key]=count;
	}
	result = { totalLetters : l_letter_count,totalNonLetters : l_nonletter_count ,totalVowels:l_vowel_count,totalConsonants :l_consonant_count,totalWord:l_word_count,uniqueWord:l_uniqueword_count,longWords:l_longword_count,averageWordLength:l_averageWordLength,wordOccurances:word_occurancesobj};

	return result;
}
catch(err)
{
	console.log(err+"The path isn't provided or string isnt valid");
}
};


module.exports = {
 createMetrics
}





