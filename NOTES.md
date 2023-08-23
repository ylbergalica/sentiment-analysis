## SENTIMENT ANALYZER

### How It Works

Uses the node `sentiment` package. Sentiment takes the text and analyzes it using basic NLP techniques.<br/>
Important one of these is **Tokenization**, it seperates the text into words (tokens), <br/>
	- this package also *ignores* stop words (unnecessary words that do not add much meaning).

After tokenizing, it consults the **AFFIN** lexicon, <br/>
	- AFFIN is the simplest english lexicon with thousands of words that have their own *polarity score*.

The scores are calculated and the overall score of the text is the resulting integer. <br/>
As simple as that!

### Assignment Questions

a. What sentiment analysis solution did you use and why?
- A node package called `sentiment`, it sacrifices some versatility and complexity for performance and practicality. They claim that the package is faster than its counterparts like `Sentimental` and some others, however I have not tested this personally. Additionally `sentiment` felt very beginner-friendly and easily customizatible (especially after attempting to setup and get `node-nlp` to function).

b. What stack did you choose to build this with and why?
A combination of technologies, I used **ReactJS** as the main front-end tool to manipulate the DOM, it allows for very neat composable code (component-based architecture) with efficient rendering. Joined by **TailwindCSS** for the styling, as for me it greatly shortens time in building a responsive and stylized page. **JSDoc** was used for a bit of documentation, to my knowledge - it is the most popular and simples documentation format and generation tool. **Jest** was used for the testing, easy to understand and clear functions allow for faster test creations.

c. What hosting solution did you choose and why?
- **Netlify**. Vercel has a limited time free plan that has expired for me, Heroku only lets you host one app with its free plan. Netlify has a great personal free plan (unfortuantely no teams), with a great interface and performance.

d. How would you package the model for easy reuse and distribution?
- I would figure out how to organize my code into a standalone library or module. Since this solution includes customization, i would have to provide clear instructions on how users can configure various parameters, and provide said method to change them. I would then package the solution/library into an npm package, and figure out how to distribute it.

e. Does this solution work with all languages? Why or why not?
- No, `sentiment` uses the AFFIN list of words, which do not include words outside of English. However `sentiment` does support adding or creating a new language, which I did not look into deeply.

f. What was the most difficult task in this assignment?
- Finding the solution that would adhere most to the challenge, or that was graspable within the timeframe. This meant it had to have a certain level of complexity and sacrificing as little efficiency and accuracy as possible.

g. What would you have done better if you had more time?
- Find and understand a better, more accurate solution that support other language and have a better grammar and semantics understanding algorithm. And/or add some words from the gen-z slang that you would normally see in comments :P for better results.

h. How would you grade your delivered assignment from 1 to 100?
- 60-70.

i. Explain what you have done to complete this assignment (your process) in very simple words, with no more than 100 words.
- I was already aware of NLP and Sentiment Analyses as concepts on paper, but nothing practical. Firstly I skimmed through some core concepts and techniques. Afterwards, I did some research on NLP node packages that might help me. My initial thought was that I would have to use a package for NLP, which would tokenize the sentence or deduce some extra information to give to the Sentiment Analysis tool/package, which would then analyze and determine the sentiment. I was wrong, after some tinkering, turns out that Sentiment Analysis tools usually already use an NLP technique on their own. After that, it was smooth sailing -> clean up the code, get some tests going, and deploy it.
