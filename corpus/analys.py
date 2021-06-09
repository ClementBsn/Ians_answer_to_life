import nltk
import re
from nltk.corpus import udhr

# from nltk.book import *
from nltk.corpus import PlaintextCorpusReader
from nltk import FreqDist

def load_file(root):
    monCorpus = PlaintextCorpusReader(root, '.*')
    return monCorpus

def count_words(corpus):
    for text in monCorpus.fileids():
        txt = monCorpus.words(text)

monCorpus = load_file("./files/")

l= list()
nbCorpus = len(monCorpus.fileids())
for corpus in monCorpus.fileids():
    print("\n"+corpus)
    mots = monCorpus.words(corpus)
    
    if(mots != None):
        nbMots = len(mots)
        print("Nombre de mots : " + str(nbMots))

        nbMotsUnique = len(set(mots))
        print("Nombre de mots uniques : " + str(nbMotsUnique)) 

    freq = FreqDist(monCorpus.words(corpus))
    l += freq.keys()
    maxi = max(freq.values())
    for i in freq.keys():
      print(i)
      print(freq[i])
    # print(maxi)
    # alphabet = ('a','b','c','d','e','f','g','h','i','j','k','l','m',
    #           'n','o','p','q','r','s','t','u','v','w','x','y','z')
    # histogram = dict()
    # for letter in alphabet:
    #    sum = 0
    #    for w in set(monCorpus.words(corpus)):
    #        sum += w.count(letter)*freq[w]
    #    histogram[letter] = sum
    # print(histogram)
# print(len(set(l)))



#print(udhr.words('French_Francais-Latin1').count('des'))


# Ex 4
#l = list()
#for text in nltk.corpus.gutenberg.fileids():
#    txt = nltk.corpus.gutenberg.words(text)
#    print(txt)
#    txt = set(txt)
#    l.append(len(txt))
#x=sum(l)
#for i in range(len(l)):
#    l[i] /= x
#print(sum(l))

# Ex 5
# cat= nltk.corpus.brown.categories()
# for c in cat:
#     print(c)
#     bigrammes=dict()
#     words=nltk.corpus.brown.words(categories=c)
#     for w in set(words):
#         for i in range(len(w)-1):
#             if(w[i:i+2] in bigrammes.keys()):
#                 bigrammes[w[i:i+2]]+=1
#             else:
#                 bigrammes[w[i:i+2]]=1

#     sumBigr = sum(bigrammes.values())    
#     for k in bigrammes.keys():
#         bigrammes[k] /= sumBigr
#         bigrammes[k]*=100

#     #print(bigrammes)
#     a=sorted(bigrammes.items(), key=lambda t: t[1])

#     b=a[-10:]


# # Ex 1 Part 3
# words=nltk.corpus.brown.words(categories='new')
# tag_w = ntlk.ConditionnalFreqDist()


    
        
            
            
#>>> brown.sents(categories=['news', 'editorial', 'reviews'])
#[['The', 'Fulton', 'County'...], ['The', 'jury', 'further'...], ...]