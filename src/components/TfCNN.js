import React from 'react';
import Gist from 'react-gist';
import conv_1 from '../images/conv2d_1_5epoch.gif'
import conv_2 from '../images/conv2d_2_5epoch.gif'
import pool_1 from '../images/max_pooling2d_1_5epoch.gif'

const TfCNN = () => {
   return( 
    <div className="mx-2">
        <strong>
            Split a .mov video into .jpg frames
        </strong>
        <p className="mt-2">First things first, we can't just feed a video into a neural network, it needs to be split it into separate .jpg files with numbered file names. This starts with loading the filenames of each image in the /frames and /templates directories</p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='splitVideo.py' />
        <strong>Build a training dataset from the saved frames</strong>
        <p>The set of frames, saved in /frames from splitVideo.py are now combined with a set of "template" images from the /templates directory. 1000 combined test images are saved in combined to be fed as features through the CNN. A CSV file is saved along with the generated test data to be loaded as label value for each image.</p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='generateDataset_0.py' />
        <p>A simple for loop allows us to set the number of images created, in this case 1000. Each template image is resized and rotated randomly before being placed at a random (x, y) within the background image.</p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='generateDataset_1.py' />
        <p>Note that at the end of each loop, the combined image is saved in the /combined directory with name img_#.jpg. The array of bounding boxes is converted to a pandas DataFrame so the .to_csv() function can be used to save the CSV file to the project's root directory.</p>
        <strong>Building, training, and saving the network's intermediate and final output</strong>
        <p>First, the image names and cvs data is loaded and the network input size is set.</p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='trainNN_0.py' />
        <p>Next is preprocessing, which is done almost entirely on the training and test images.</p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='trainNN_1.py' />
        <p></p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='trainNN_2.py' />
        <p></p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='trainNN_3.py' />
        <p></p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='trainNN_4.py' />
        <p></p>
        <Gist id='b74f08379533f0b4f4e823585cf27173' file='trainNN_5.py' />
        <p></p>
        <img src={conv_1} alt="" className="tf-cnn gif" />
        <img src={pool_1} alt="" className="tf-cnn gif" />
        <img src={conv_2} alt="" className="tf-cnn gif" />
    </div>
    )
}

export default TfCNN;