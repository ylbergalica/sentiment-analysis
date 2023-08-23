SENTIMENT ANALYZER

### How To Run

### How It Works

Uses the node `sentiment` package. Sentiment takes the text and analyzes it using basic NLP techniques.
Important one of these is **Tokenization**, it seperates the text into words (tokens),
	- this package also ignores stop words (unnecessary words that do not add much meaning).

After tokenizing, it consults the **AFFIN** lexicon,
	- AFFIN is the simplest english lexicon with thousands of words that have their own polarity score.

The scores are calculated and the overall score of the text is the resulting integer
As simple as that!


a. What sentiment analysis solution did you use and why?
b. What stack did you choose to build this with and why?
c. What hosting solution did you choose and why?
d. How would you package the model for easy reuse and distribution?
e. Does this solution work with all languages? Why or why not?
f. What was the most difficult task in this assignment?
g. What would you have done better if you had more time?
h. How would you grade your delivered assignment from 1 to 100?
i. Explain what you have done to complete this assignment (your process) in very simple
words, with no more than 100 words.