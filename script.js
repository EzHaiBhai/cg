const copyToClipboard = async () => {
  try {
    const element = document.querySelector(".user-select-all");
    await navigator.clipboard.writeText(element.textContent);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyIMGENH = async () => {
  try {
    await navigator.clipboard.writeText(IMGENH);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyIMGCOM= async () => {
  try {
    await navigator.clipboard.writeText(IMGCOM);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyIMGPROC= async () => {
  try {
    await navigator.clipboard.writeText(IMGPROC);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyIMGSEG= async () => {
  try {
    await navigator.clipboard.writeText(IMGSEG);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyIMGMOR= async () => {
  try {
    await navigator.clipboard.writeText(IMGMOR);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyFLASH= async () => {
  try {
    await navigator.clipboard.writeText(FLASH);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const FLASH = `

PROGRAM 1

PROCEDURE TO CREATE AN ANIMATION TO REPRESENT THE GROWING MOON.

1.	Open flash 8 software -> click on flash document->go to windows->properties ->select the properties tool-> choose the Background to black.

2.	Go to fill color under tool bar-> select the white color.

3.	Select the oval tool in order to draw the moon. u will get a white circle.

4.	Select the oval tool in order to draw the moon. u will get a white circle.

5.	Select the white circle on the worksheet using the selection tool->right click->convert to symbol->select movie clip->give suitable name eg: moon->click ok.

6.	Go to filter->click on the + symbol->select glow to apply glowing effect-> select the color to white under glow and adjust the blur x/blur y values.

7.	Click on the + symbol again and chose blur-> again adjust the blur x/blur y values.

8.	Place the moon where ever you want on the work area.double click on layer 1 and rename as MOON.

9.	Insert another layer->rename it as Animation.

10.	Select the fill color to black-> select oval tool and draw a circle on the moon to cover the moon->select the newly added circle-> right click-> convert to symbol-> movie clip-> name it as Animation.

11.	Go to filter-> select + symbol->give the glow and blur effect as did for moon.

12.	Select the 150th frame in moon layer->right click->insert key frame. repeat the same for Animation layer.

13.	Click on the 149th keyframe of animation layer ->right click->press create motion-> select the animation movie clip and move slowly across the moon.

14.	Finally go to control-> test movie-> u will get a growing moon as the output.
	

OUTPUT


PROGRAM 2

PROCEDURE TO CREATE AN ANIMATION TO INDICATE A BALL BOUNCING ON STEPS.

1.	Go to start- macromedia- click on flash document

2.	select the line tool and draw the steps. colour it using the paint bucket tool

3.	Select the circle from the tool bar and create a circle on the work area.

4.	Now fill the colour to the circle using the paint bucket tool from the tool bar.

5.	Go to frames right click on the first frame and choose insert key frame. slightly move the ball. Repeat the same procedure by adding new key frames to show the ball change the shape of the ball slightly when it touches the surface.
6.	In order to change the shape use the free transform tool.

7.	Go to control and click on test movies .you will observe the ball bouncing on steps.

OUTPUT


PROGRAM 3

PROCEDURE TO SIMULATE MOVEMENT OF A CLOUD.

1.	go to start- macromedia- click on flash document

2.	create a blue background in layer 1

3.	Now insert a layer 2 and draw the clouds in this layer.

4.	in order to create the clouds, go to tool bar and select pencil option, draw the cloud in layer2

5.	fill the colour to the cloud, right click on it- choose convert to symbol option- give the name as cloud

6.	select the movie clip option and click ok.

7.	Go to filter->click on the + symbol->select glow to apply glowing effect-> select the colour to white

8.	under glow and adjust the blur x/blur y values.

9.	give the appropriate blur effect to the cloud.

10.	go to frames, insert key frame on both the layer, create the motion tween on 2nd layer and move the clouds

11.	finally go to control->click on test movies

OUTPUT



PROGRAM 4

PROCEDURE TO DRAW THE FAN BLADES AND TO GIVE PROPER ANIMATION.

1.	go to start-> macromedia-> click on flash document

2.	Create a background on layer 1.

3.	Insert another layer-> draw only fan blades and its circle.

4.	Insert another layer and draw fan stand.

5.	On each layer right click on frames and insert key frames.

6.	Select the fan blade’s layer and insert new key frame-> select the fan blades by free transform tool and rotate the circle a little bit.

7.	repeat the rotation until you get the fan rotation animation

8.	Go to control->test movie to see the animation.



OUTPUT


PROGRAM 5

PROCEDURE	TO	DISPLAY	THE	BACKGROUND	GIVEN	(FILENAME:

TULIP.JPG) THROUGH YOUR NAME.


1.	Go to start-> macromedia-> click on flash document

2.	Go to file-> import->open external library-> select a background image Click open.

3.	The selected image will be stored in your library. Open library and drag the image on the work area by selecting the image.

4.	Resize the image to fit on the work area.

5.	Select the text tool from the tool bar.

6.	Type your name. Select the text and go to property to apply appropriate font effects like font size, style and Colour etc.

7.	Go to control-> movie clip to see the final output.

OUTPUT



PROGRAM 6

procedure to create an animation with the following features.

WELCOME

*	Letters should appear one by one

*	The fill colour of The text should change to a different colour after

the display of the full word.

1.	Go to start->Macro Media-click on Flash document.

2.	Choose the textbox from the tool bar. Type the word as ‘WELCOME’ on layer1.

3.	Select the complete word, increase its Font size and change the colour.

4.	In the timeline window, select the 1st frame-Right click on it-choose insert key frame. Now delete a last letter {E} and change the colour of the remaining word.

5.	Repeat the above procedure till you delete every word in ‘WELCOME’.

6.	Now select all the key frames->Right click ->choose ‘Reverse key frames’.

7.	After reversing the frames copy the last frame and paste on its next. now in the new frame Select all the complete word ‘welcome’ and change the colour.
8.	Finally, go to ‘control’-click on ‘test movie’ you will get the required animation.

OUTPUT



PROGRAM 7

PROCEDURE TO SIMULATE A BALL HITTING ANOTHER BALL.

1.	Go to start->Macro Media-click on Flash document.

2.	choose the circle option displayed in the toolbar. create two circle at the opposite ends.

3.	go to frames-> right click on the 1st blank frame and click insert key frames.

4.	Select the 1st ball and make it to move towards the other till it touches.

5.	Change the shape of the ball using free transform tool as soon as the two ball touches each other. after hitting each other make them to move towards opposite direction.

6.	before moving to the opposite direction bring back the balls to its original shapes.

7.	finally test the animation by selecting control->movie clip.

OUTPUT



PROGRAM 8

PROCEDURE TO CREATE AN ANIMATED CURSOR USING STARTDRAG("SS", TRUE); MOUSE.HIDE();

1.	Go to start->Macro Media-click on Flash document

2.	Insert or draw any object of your choice for example butterfly in this example.

3. Using free transform tool select the object-right click-convert to symbol- select movie clip- give the name(mm)- click ok.

3.Enter the instance name as (mm) using the property tool box.(same as the movie clip name).

4.	Select the object using free transform tool- go to modify-> timeline->distribute to layers.

5.	Select layer1 and rename it to Action

6.	Select the first key frame in the action layer- go to windows- click action.

7.	You will get action frame- enter the following code in the action frame.

Mouse.hide();

this.mm.onEnterFrame=function() {

startDrag(this,true);

};

8.To run the animation go to control-> movie clip.

OUTPUT


PROGRAM 9

PROCEDURE TO DESIGN A VISITING CARD CONTAINING ATLEAST ONE GRAPHIC AND TEXT INFORMATION.

1.	Open adobe Photoshop 7.0-> file-> new-> enter height 200 and width 400 for the visiting card.

2.	Select the rectangle tool in the tool bar and draw on the half of the work area-> colour it. Repeat the same for remaining half-> use different colours to colour.

3.	Copy any picture of your choice and place it on the work area-> Resize it using transform tool.

4.	Select the text tool and type text of your choice.

5.	Apply the text font size, colour and style of your choice.

OUTPUT



PROGRAM 10

PROCEDURE TO TAKE A PHOTOGRAPHIC IMAGE. GIVE A TITLE FOR THE IMAGE. PUT THE BORDER. WRITE YOUR NAMES. WRITE THE NAME OF INSTITUTION AND PLACE.


1.	Open adobe Photoshop 7.0-> file-> new-> enter height 800 and width 600

2.	Open an image file and copy the image->paste the copied image on the new file.

3.	Right click on the rectangle tool->custom shape-> select the shape->select the colour->drag on your image.

4.	Select the text tool->type your name, institution name and place.

5.	Save the file.

OUTPUT


PROGRAM 11

PROCEDURE TO PREPARE A COVER PAGE FOR THE BOOK IN YOUR SUBJECT AREA. PLAN YOUR OWN DESIGN.

1.open adobe Photoshop 7.0-> file-> new-> enter height 500 and width 400 for the cover page.

2.	Select the rectangle tool in the tool bar and draw on the half of the work area-> colour it Repeat the same for remaining area-> use different colours to colour.

3.	Copy any picture of ur choice and place it on the work area->resize it using free transform tool.

4.	Select the text tool and type text of your choice.

5.	Apply the text font size, colour and style of your choice.

6.	Go to layer->layer style->blended option-> select glow options of your choice.

7.	Apply the effects using blended options.

OUTPUT

			
				
PROGRAM 12		
PROCEDURE  TO	EXTRACT  THE  FLOWER  ONLY  FROM  GIVEN
PHOTOGRAPHIC	IMAGE  AND  ORGANISE	IT  ON  A  BACKGROUND.
SELECTING YOUR OWN BACKGROUND FOR ORGANISATION.

1.	Open adobe Photoshop 7.0-> file->open-> choose a file and open it.

2.	Select the flower from the image using the lasso tool.

3.	Go to edit-> copy->Again go to file->new->give height 500 and width 500.

4.	Choose appropriate background and foreground colour from the tool bar.

5.	Go to edit->fill->under use select background colour->ok.

6.	Go to edit->paste.

OUTPUT



PROGRAM 13

PROCEDURE TO ADJUST THE BRIGHTNESS AND CONTRAST OF THE PICTURE SO THAT IT GIVES AN ELEGANT LOOK.

1.	Open adobe Photoshop 7.0-> file->open-> choose a file and open it.

2.	Go to image->adjustments->Brightness/Contrast.

3.	After getting the Brightness/Contrast window adjust the brightness and contrast by Dragging the appropriate bar setting.

4.	Finally save the image file.



OUTPUT



PROGRAM 14

PROCEDURE TO POSITION THE PICTURE PREFERABLY ON A PLAIN BACKGROUND OF A COLOUR OF YOUR CHOICE - POSITIONING INCLUDES ROTATION AND SCALING.

1.	Open adobe Photoshop 7.0-> file->open-> choose a file and open it.

2.	Select the flower from the image using the lasso tool.

3.	Go to edit-> copy->Again go to file->new->give height 500 and width 500.

4.	Choose appropriate background and foreground colour from the tool bar.

5.	Go to edit->fill->under use select background colour->ok.

6.	Go to edit->paste->again go to edit->free transform tool-> you will get a box around the image for scaling and rotating.

7.	Rotate and scale as per your requirement->and press apply.

8.Save the image.

OUTPUT


PROGRAM 15

PROCEDURE TO REMOVE THE ARROWS AND TEXT FROM THE GIVEN PHOTOGRAPHIC IMAGE

1.	Open adobe Photoshop 7.0-> file->open-> choose a file with arrows and some text -> open it.
2.select the arrows from lasso tool from the tool bar which you want to delete->go to edit-> cut.
3.	Select the text on the image using text tool and press delete.

4.	Save the file.

OUTPUT

	

PROGRAM 16

PROCEDURE TO TYPE A WORD AND APPLY THE EFFECTS SHADOW EMBOSS

1.	Open adobe Photoshop 7.0-> file->open-> choose a file and open it.

2.	Select the text tool and place on the work area-> type your institute name

3.	Select the typed text go to layer->layer style->blended option-> tick drop shadow, inner shadow, bevel and emboss->contour->satin->gradient overlay.

4.	finally save the image.


OUTPUT
	

PROGRAM 17

PROCEDURE TO USE APPROPRIATE TOOL(S) FROM THE TOOLBOX, CUT THE OBJECTS FROM 3 FILES (F1.JPG, F2.JPG & F3.JPG); ORGANISE THEM IN A SINGLE FILE AND APPLY FEATHER EFFECTS.

1.	Open adobe Photoshop 7.0-> file->open f1.jpg.

2.	Select the flower in it using lasso tool ->right click->feather-> give feather radius 20 pixels.

3.	Go to edit-> copy-> open a new file with height 500 and width also 500->paste the flower.

4.	Repeat the same procedure for f2.jpg and f3.jpg-> select the flower ->give feather effect-> edit->copy-> open a new file-> paste.

5.	You will get o final single file with 3 flowers from different files.

6.	Save the new file.

OUTPUT
	

PROGRAM 18

PROCEDURE	TO	DISPLAY	THE	BACKGROUND	GIVEN	(FILENAME:

GARDEN.JPG) THROUGH YOUR NAME USING MASK.

1.	Go to start-> macromedia-> click on flash document

2.	Go to file-> import->open external library-> select a background image Click open.

3.	The selected image will be stored in your library. Open library and drag the image on the work area by selecting the image.

4.	go to view->zoom out->resize the picture such that it should fit the work area.

5.insert layer2. choose the text tool from the toolbar and type your name.

6.Select the text to change its font size and colour of your choice. place the text on the left of the workarea.

7.Right click on the 70th keyframe of layer 2 and insert a keyframe. move the text to the right side of the workarea->right click on the 69th frame of layer 2-> choose create motion tween.

8.right click on layer 2 choose the option mask.

9.Go to control->test movie to see the animation.

OUTPUT


PROGRAM 19

PROCEDURE TO MAKE ANYONE OF ONE OF THE PARROTS BLACK & WHITE IN A GIVEN PICTURE.

1.	Open adobe Photoshop 7.0-> file->open original parrot picture.

2.	Select a parrot using lasso tool from the tool bar.

3.	after selection->go to image-adjustments->desaturate.

4.	Then selected picture will now turn to black and white.

5.	save as modified image.

OUTPUT


PROGRAM 20

PROCEDURE TO CHANGE A CIRCLE INTO A SQURE USING FLASH.

1.	Go to start->macromedia->flash document

2.	Select the circle tool from the tool bar. draw a circle on the work area.colour it

3. Click on the 40th  key frame-> insert new key frame.

4.	Selecting the last key frame->draw a rectangle on the circle by selecting the rectangle tool bar so that it will cover the circle. colour the rectangle by the different colour.
5.	Again click on the last frame->under properties->under tween->change the option shape

from none.

6.	Then again select the last but one frame->go to properties->tween->change to shape.

7.	Go to control->test movie->see the circle changing in to rectangle.

OUTPUT

`;

const IMGMOR = `
% Read a binary image
bw_img = imread('text.png');

% Display the original binary image
figure;
imshow(bw_img);
title('Original Binary Image');

% Perform erosion
se = strel('square', 5); % Create a square structuring element
eroded_img = imerode(bw_img, se);

% Display the eroded image
figure;
imshow(eroded_img);
title('Eroded Image');

% Perform dilation
dilated_img = imdilate(bw_img, se);

% Display the dilated image
figure;
imshow(dilated_img);
title('Dilated Image');

% Perform opening (erosion followed by dilation)
opened_img = imopen(bw_img, se);

% Display the opened image
figure;
imshow(opened_img);
title('Opened Image');

% Perform closing (dilation followed by erosion)
closed_img = imclose(bw_img, se);

% Display the closed image
figure;
imshow(closed_img);
title('Closed Image');

`;

const IMGSEG =`
% Read a grayscale image
img = imread('coins.png');

% Display the original image
figure;
imshow(img);
title('Original Image');

% Apply a threshold to segment the image
threshold = graythresh(img); % Otsu's method for thresholding
bw_img = imbinarize(img, threshold);

% Display the segmented image
figure;
imshow(bw_img);
title('Segmented Image');

% Apply morphological operations to improve segmentation
bw_img = bwareaopen(bw_img, 100); % Remove small objects
bw_img = imfill(bw_img, 'holes'); % Fill holes in objects

% Display the improved segmentation
figure;
imshow(bw_img);
title('Improved Segmented Image');
`;

const IMGPROC = `
% Read a color image
img = imread('peppers.png');

% Display the original image
figure;
imshow(img);
title('Original Image');

% Convert the image to grayscale
gray_img = rgb2gray(img);

% Display the grayscale image
figure;
imshow(gray_img);
title('Grayscale Image');

% Extract the red, green, and blue channels
red_channel = img(:,:,1);
green_channel = img(:,:,2);
blue_channel = img(:,:,3);

% Display the red, green, and blue channels
figure;
subplot(1,3,1);
imshow(red_channel);
title('Red Channel');
subplot(1,3,2);
imshow(green_channel);
title('Green Channel');
subplot(1,3,3);
imshow(blue_channel);
title('Blue Channel');
`;

const IMGCOM =`
% Read an image
img = imread('image.jpg');
imshow(img);
title('Original Image');

% Convert the image to grayscale if it's not already
if size(img, 3) == 3
    img = rgb2gray(img);
end

% Apply 2D DCT to the image
dct_img = dct2(double(img));

% Set the quality factor (higher means better quality but larger file size)
quality = 50;

% Define the quantization matrix
Q = [...
    16 11 10 16 24 40 51 61;
    12 12 14 19 26 58 60 55;
    14 13 16 24 40 57 69 56;
    14 17 22 29 51 87 80 62;
    18 22 37 56 68 109 103 77;
    24 35 55 64 81 104 113 92;
    49 64 78 87 103 121 120 101;
    72 92 95 98 112 100 103 99];

% Perform quantization
quantized_img = round(dct_img ./ (quality * Q));

% Reconstruct the image using inverse DCT
reconstructed_img = uint8(idct2(quantized_img));

% Display the reconstructed image
figure;
imshow(reconstructed_img);
title('Reconstructed Image');

% Calculate compression ratio
original_size = numel(img);
compressed_size = numel(quantized_img);
compression_ratio = original_size / compressed_size;
disp(['Compression Ratio: ' num2str(compression_ratio)]);
`;

const IMGENH = `

originalImage = imread('download.jpg');
grayImage = rgb2gray(originalImage);
enhancedImage = histeq(grayImage);
subplot(1,2,1), imshow(grayImage), title('Original Image');
subplot(1,2,2), imshow(enhancedImage), title('Enhanced Image');

`;