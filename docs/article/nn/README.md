<header class="hero">
<img class="head" src="/projects/nn/ppt.png" alt="hero">
<h1 id="main-title"> FFD Augmentor: Towards Few-Shot Oracle Character Recognition from Scratch  </h1>
<p class="description">May 2022 - Jul 2022  (The paper was accepted by ACCV2022.)</p>
</header>


Recognizing oracle characters, the earliest hieroglyph discovered in China, is recently addressed with more and more attention.
Due to the difficulty of collecting labeled data, recognizing oracle characters is naturally a Few-Shot Learning (FSL) problem, which aims to tackle the learning problem with only one or a few training data.
Most current FSL methods assume a disjoint but related big dataset can be utilized such that one can transfer the related knowledge to the few-shot case.
However, unlike common phonetic words like English letters, oracle bone inscriptions are composed of radicals representing graphic symbols.

<img class="head" src="/projects/nn/ci.jpg" alt="hero">

>  The oracle character ‘Ci’ (in the left column) is made up of two parts, an eight- like character (in the middle column) and a knife-like radical (in the right column). After the FFD transformation (from top to bottom), though the strokes are distorted, the overall structure remains unchanged. We can still re-recognize the character ‘Ci’ based on them.

Furthermore, as time goes, the graphic symbols to represent specific objects were significantly changed.
Hence we can hardly find plenty of prior knowledge to learn without negative transfer.
Another perspective to solve this problem is to use data augmentation algorithms to directly enlarge the size of training data to help the training of deep models.
But popular augment strategies, such as dividing the characters into stroke sequences, break the orthographic units of Chinese characters and destroy the semantic information. 
Thus simply adding noise to strokes perform weakly in enhancing the learning capacity.

To solve these issues, we in this paper propose a new data augmentation algorithm for oracle characters such that 

(1) it will introduce informative diversity for the training data while alleviating the loss of semantics; 

(2) with this data augmentation algorithm, we can train the few-shot model from scratch without pre-training and still get a powerful recognition model with superior performance to models pre-trained with a large dataset.

<img class="head" src="/projects/nn/framework_v2.jpg" alt="hero">

> Illustration of our FFD Augmentor. We generate random offsets for each control point and construct a deformed image based on the recalculation of the world coordinates of each vertex of the image.

Specifically, our data augmentation algorithm includes a B-spline free form deformation method to randomly distort the strokes of characters but maintain the overall structures.
We generate 20 - 40 augmented images for each training data and use this augmented training set to train a deep neural network model in a standard pipeline.
Extensive experiments on several benchmark datasets demonstrate the effectiveness of our augmentor.

<img class="head" src="/projects/nn/block_offset.png" alt="hero">

> Left: Different combination of Patch numbers and max offsets varies in accuracy. Right: Num of Augmented Sample influences the model accuracy.

Code and models are released in [https://github.com/Hide-A-Pumpkin/FFDAugmentor](https://github.com/Hide-A-Pumpkin/FFDAugmentor).
