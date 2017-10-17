//	HYPE.documents["info"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "info_Resources";
	var documentName = "info";
	var documentLoaderFilename = "info_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
		}
		window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

		var headElement = document.getElementsByTagName('head')[0];
		var scriptElement = document.createElement('script');
		scriptElement.type= 'text/javascript';
		scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
		headElement.appendChild(scriptElement);
		return;
	}
	
	var attributeTransformerMapping = {"BorderColorRight":"ColorValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","BorderColorLeft":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"-137.531px","isRelative":true,"endValue":"5.83228px","identifier":"Top","duration":1.033333,"timingFunction":"easeinout","startTime":0,"type":0,"oid":"E3DC6026-A5B4-47C3-A732-7F8A6E602C7E-1000-00000F5A58C7B907"},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":9.033334,"timingFunction":"easeinout","startTime":0,"type":0,"oid":"D23FC2C1-1A84-4056-BEC2-BAAD618DFEB3-357-000000E6AEC5171C"},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":10.03333,"timingFunction":"easeinout","startTime":0,"type":0,"oid":"BF9066FB-CDC2-4E21-B635-BC7B88D464AF-357-000000ED64574256"},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":7.033333,"timingFunction":"easeinout","startTime":0,"type":0,"oid":"ED9F6B6A-141E-44AC-B741-3E7550D087D4-1000-00000FE0BA4108BB"},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":12.13333,"timingFunction":"easeinout","startTime":0,"type":0,"oid":"EEC8660B-87B6-41A5-ABC3-0197DBEFDF7F-357-000004536BF2CB52"},{"startValue":"0.000000","isRelative":true,"endValue":"0.000000","identifier":"Opacity","duration":17.2,"timingFunction":"easeinout","startTime":0,"type":0,"oid":"03698293-9BC6-4DCA-9341-BF53DD951C6E-357-000004AB39184B80"},{"startValue":"74.5859px","isRelative":true,"endValue":"77.199px","identifier":"Left","duration":0.8666667,"timingFunction":"easeinout","startTime":1.033333,"type":0,"oid":"3F8850C3-21F9-4993-8B87-F5605D71613F-1000-00000F5E39FB099D"},{"startValue":"-77.2278px","isRelative":true,"endValue":"133.711px","identifier":"Top","duration":0.8666667,"timingFunction":"easeinout","startTime":1.033333,"type":0,"oid":"3F8850C3-21F9-4993-8B87-F5605D71613F-1000-00000F5E39FB099D"},{"startValue":"-194.622px","isRelative":true,"endValue":"72px","identifier":"Left","duration":1.133333,"timingFunction":"easeinout","startTime":1.9,"type":0,"oid":"486BFAD0-9DB9-49F5-B195-E133124C1386-1000-00000F66CF376BD8"},{"startValue":"200.016px","isRelative":true,"endValue":"198px","identifier":"Top","duration":1.133333,"timingFunction":"easeinout","startTime":1.9,"type":0,"oid":"486BFAD0-9DB9-49F5-B195-E133124C1386-1000-00000F66CF376BD8"},{"startValue":"200.234px","isRelative":true,"endValue":"199px","identifier":"Top","duration":0.9666667,"timingFunction":"easeinout","startTime":3.033333,"type":0,"oid":"EC0FBA73-0A1A-47AD-B077-3F1DBB6EF4A0-1000-00000F9DD87390A8"},{"startValue":"-162.109px","isRelative":true,"endValue":"243px","identifier":"Left","duration":0.9666667,"timingFunction":"easeinout","startTime":3.033333,"type":0,"oid":"EC0FBA73-0A1A-47AD-B077-3F1DBB6EF4A0-1000-00000F9DD87390A8"},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.9666667,"timingFunction":"easeinout","startTime":3.033333,"type":0,"oid":"EC0FBA73-0A1A-47AD-B077-3F1DBB6EF4A0-1000-00000F9DD87390A8"},{"startValue":"200.365px","isRelative":true,"endValue":"198px","identifier":"Top","duration":0.9666667,"timingFunction":"easeinout","startTime":4,"type":0,"oid":"733442B0-56EF-420F-B98A-78C64050564B-1000-00000FAD678C9166"},{"startValue":"-157.573px","isRelative":true,"endValue":"409px","identifier":"Left","duration":0.9666667,"timingFunction":"easeinout","startTime":4,"type":0,"oid":"733442B0-56EF-420F-B98A-78C64050564B-1000-00000FAD678C9166"},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.9666667,"timingFunction":"easeinout","startTime":4,"type":0,"oid":"733442B0-56EF-420F-B98A-78C64050564B-1000-00000FAD678C9166"},{"startValue":"199.509px","isRelative":true,"endValue":"200px","identifier":"Top","duration":0.9666667,"timingFunction":"easeinout","startTime":5.033333,"type":0,"oid":"138E96D7-527F-4BD1-BD27-DDB058BF15A6-1000-00000FB4DA6B286C"},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.9666667,"timingFunction":"easeinout","startTime":5.033333,"type":0,"oid":"138E96D7-527F-4BD1-BD27-DDB058BF15A6-1000-00000FB4DA6B286C"},{"startValue":"-208.308px","isRelative":true,"endValue":"573px","identifier":"Left","duration":0.9666667,"timingFunction":"easeinout","startTime":5.033333,"type":0,"oid":"138E96D7-527F-4BD1-BD27-DDB058BF15A6-1000-00000FB4DA6B286C"},{"startValue":"-397.02px","isRelative":true,"endValue":"218.567px","identifier":"Left","duration":1.066667,"timingFunction":"easeinout","startTime":5.966667,"type":0,"oid":"298629DF-4DD3-416E-BBBA-DD6BCC3F7F74-1000-00000FD27DFB055A"},{"startValue":"540px","isRelative":true,"endValue":"539.668px","identifier":"Top","duration":1.066667,"timingFunction":"easeinout","startTime":5.966667,"type":0,"oid":"298629DF-4DD3-416E-BBBA-DD6BCC3F7F74-1000-00000FD27DFB055A"},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","startTime":7.033333,"type":0,"oid":"ED9F6B6A-141E-44AC-B741-3E7550D087D4-1000-00000FE0BA4108BB"},{"startValue":"257px","isRelative":true,"endValue":"258.039px","identifier":"Left","duration":1,"timingFunction":"easeinout","startTime":8.033334,"type":0,"oid":"104CDCA3-79C6-4EB2-910C-B1028CC6C69F-357-000000DCC2C54DA1"},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","startTime":8.033334,"type":0,"oid":"104CDCA3-79C6-4EB2-910C-B1028CC6C69F-357-000000DCC2C54DA1"},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1,"timingFunction":"easeinout","startTime":9.033334,"type":0,"oid":"D23FC2C1-1A84-4056-BEC2-BAAD618DFEB3-357-000000E6AEC5171C"},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":1.033333,"timingFunction":"easeinout","startTime":10.03333,"type":0,"oid":"BF9066FB-CDC2-4E21-B635-BC7B88D464AF-357-000000ED64574256"},{"startValue":"1131.88px","isRelative":true,"endValue":"1147px","identifier":"Top","duration":1.033333,"timingFunction":"easeinout","startTime":11.03333,"type":0,"oid":"BD4C5221-4A6D-46D5-B539-EBE7688CD1B6-357-000003EA8732B519"},{"startValue":"799.704px","isRelative":true,"endValue":"219px","identifier":"Left","duration":1.033333,"timingFunction":"easeinout","startTime":11.03333,"type":0,"oid":"BD4C5221-4A6D-46D5-B539-EBE7688CD1B6-357-000003EA8732B519"},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.5,"timingFunction":"easeinout","startTime":12.13333,"type":0,"oid":"EEC8660B-87B6-41A5-ABC3-0197DBEFDF7F-357-000004536BF2CB52"},{"startValue":"1268.84px","isRelative":true,"endValue":"1269.15px","identifier":"Top","duration":1.566667,"timingFunction":"easeinout","startTime":12.56667,"type":0,"oid":"7D187DCD-062E-414C-9DE1-E82F2ADDC1F8-357-0000045A9E5A1E3B"},{"startValue":"-199px","isRelative":true,"endValue":"387.372px","identifier":"Left","duration":1.533334,"timingFunction":"easeinout","startTime":12.56667,"type":0,"oid":"6345B03C-DF73-4098-A95F-8FC37840BB56-357-000004797C784781"},{"startValue":"-541px","isRelative":true,"endValue":"45.3708px","identifier":"Left","duration":1.566667,"timingFunction":"easeinout","startTime":12.56667,"type":0,"oid":"7D187DCD-062E-414C-9DE1-E82F2ADDC1F8-357-0000045A9E5A1E3B"},{"startValue":"1301.84px","isRelative":true,"endValue":"1302.15px","identifier":"Top","duration":1.566667,"timingFunction":"easeinout","startTime":12.56667,"type":0,"oid":"6345B03C-DF73-4098-A95F-8FC37840BB56-357-000004797C784781"},{"startValue":"818.779px","isRelative":true,"endValue":"386px","identifier":"Left","duration":1.566667,"timingFunction":"easeinout","startTime":14.13333,"type":0,"oid":"CB83FA0A-60E2-47DE-9202-CD36D4D262BD-357-00000468BED669DC"},{"startValue":"1387.45px","isRelative":true,"endValue":"1387px","identifier":"Top","duration":1.566667,"timingFunction":"easeinout","startTime":14.13333,"type":0,"oid":"3D13378E-A0BE-4668-881F-21401F9E3781-357-000004643E30F06D"},{"startValue":"1421.45px","isRelative":true,"endValue":"1421px","identifier":"Top","duration":1.566667,"timingFunction":"easeinout","startTime":14.13333,"type":0,"oid":"CB83FA0A-60E2-47DE-9202-CD36D4D262BD-357-00000468BED669DC"},{"startValue":"905.822px","isRelative":true,"endValue":"473px","identifier":"Left","duration":1.566667,"timingFunction":"easeinout","startTime":14.13333,"type":0,"oid":"3D13378E-A0BE-4668-881F-21401F9E3781-357-000004643E30F06D"},{"startValue":"1497.89px","isRelative":true,"endValue":"1498.26px","identifier":"Top","duration":1.500001,"timingFunction":"easeinout","startTime":15.7,"type":0,"oid":"A160D035-BAA9-4EC8-9AA5-F670A8FEFF08-357-0000045EE87E240B"},{"startValue":"-78px","isRelative":true,"endValue":"389.264px","identifier":"Left","duration":1.500001,"timingFunction":"easeinout","startTime":15.7,"type":0,"oid":"85C172D6-EA56-4FAD-9699-7197C1E42F0F-357-0000047DB0A8C66D"},{"startValue":"-423px","isRelative":true,"endValue":"44.3062px","identifier":"Left","duration":1.500001,"timingFunction":"easeinout","startTime":15.7,"type":0,"oid":"A160D035-BAA9-4EC8-9AA5-F670A8FEFF08-357-0000045EE87E240B"},{"startValue":"1545.89px","isRelative":true,"endValue":"1546.26px","identifier":"Top","duration":1.500001,"timingFunction":"easeinout","startTime":15.7,"type":0,"oid":"85C172D6-EA56-4FAD-9699-7197C1E42F0F-357-0000047DB0A8C66D"},{"startValue":"0.000000","isRelative":false,"endValue":"1.000000","identifier":"Opacity","duration":0.8333321,"timingFunction":"easeinout","startTime":17.2,"type":0,"oid":"03698293-9BC6-4DCA-9341-BF53DD951C6E-357-000004AB39184B80"}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":18.03333}},"id":"089A9457-28B5-4843-B273-FF5D2ED4243B-1000-00000F5575141533","sceneIndex":0,"perspective":"600px","initialValues":{"CB83FA0A-60E2-47DE-9202-CD36D4D262BD-357-00000468BED669DC":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"818.779px","Display":"inline","BackgroundImage":"anima-36.png","Height":"77px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"17","Top":"1421.45px","Width":"75px","TagName":"div"},"EC0FBA73-0A1A-47AD-B077-3F1DBB6EF4A0-1000-00000F9DD87390A8":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-162.109px","Display":"inline","BackgroundImage":"anima-23.png","Height":"310px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"4","Top":"200.234px","Opacity":"0.000000","Width":"178px","TagName":"div"},"BD4C5221-4A6D-46D5-B539-EBE7688CD1B6-357-000003EA8732B519":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"799.704px","Display":"inline","BackgroundImage":"anima-31.png","Height":"128px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"12","Top":"1131.88px","Width":"408px","TagName":"div"},"3D13378E-A0BE-4668-881F-21401F9E3781-357-000004643E30F06D":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"905.822px","Display":"inline","BackgroundImage":"anima-35.png","Height":"154px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"16","Top":"1387.45px","Width":"350px","TagName":"div"},"3F8850C3-21F9-4993-8B87-F5605D71613F-1000-00000F5E39FB099D":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"74.5859px","Display":"inline","BackgroundImage":"anima-21.png","Height":"50px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"2","Top":"-77.2278px","Width":"646px","TagName":"div"},"E3DC6026-A5B4-47C3-A732-7F8A6E602C7E-1000-00000F5A58C7B907":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"172.08px","Display":"inline","BackgroundImage":"anima-20.png","Height":"127px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"1","Top":"-137px","Width":"431px","TagName":"div"},"733442B0-56EF-420F-B98A-78C64050564B-1000-00000FAD678C9166":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-157.573px","Display":"inline","BackgroundImage":"anima-24.png","Height":"311px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"5","Top":"200.365px","Opacity":"0.000000","Width":"178px","TagName":"div"},"7D187DCD-062E-414C-9DE1-E82F2ADDC1F8-357-0000045A9E5A1E3B":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-541px","Display":"inline","BackgroundImage":"anima-33.png","Height":"149px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"15","Top":"1268.84px","Width":"340px","TagName":"div"},"D23FC2C1-1A84-4056-BEC2-BAAD618DFEB3-357-000000E6AEC5171C":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"253px","Display":"inline","BackgroundImage":"anima-29.png","Height":"237px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"10","Top":"873px","Opacity":"0.000000","Width":"183px","TagName":"div"},"BF9066FB-CDC2-4E21-B635-BC7B88D464AF-357-000000ED64574256":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"436px","Display":"inline","BackgroundImage":"anima-30.png","Height":"191px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"11","Top":"874px","Opacity":"0.000000","Width":"300px","TagName":"div"},"486BFAD0-9DB9-49F5-B195-E133124C1386-1000-00000F66CF376BD8":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-194.622px","Display":"inline","BackgroundImage":"anima-22.png","Height":"309px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Top":"200.016px","Opacity":"1.000000","Width":"179px","TagName":"div"},"EEC8660B-87B6-41A5-ABC3-0197DBEFDF7F-357-000004536BF2CB52":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"412.903px","Display":"inline","BackgroundImage":"anima-32.png","Height":"367px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"13","Top":"1268.62px","Opacity":"0.000000","Width":"22px","TagName":"div"},"ED9F6B6A-141E-44AC-B741-3E7550D087D4-1000-00000FE0BA4108BB":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"77px","Display":"inline","BackgroundImage":"anima-27.png","Height":"270px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"8","Top":"692px","Opacity":"0.000000","Width":"180px","TagName":"div"},"138E96D7-527F-4BD1-BD27-DDB058BF15A6-1000-00000FB4DA6B286C":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-208.308px","Display":"inline","BackgroundImage":"anima-25.png","Height":"311px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"6","Top":"199.509px","Opacity":"0.000000","Width":"202px","TagName":"div"},"298629DF-4DD3-416E-BBBA-DD6BCC3F7F74-1000-00000FD27DFB055A":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-397.02px","Display":"inline","BackgroundImage":"anima-26.png","Height":"136px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"7","Top":"540px","Width":"401px","TagName":"div"},"104CDCA3-79C6-4EB2-910C-B1028CC6C69F-357-000000DCC2C54DA1":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"257px","Display":"inline","BackgroundImage":"anima-28.png","Height":"181px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"9","Top":"693px","Opacity":"0.000000","Width":"310px","TagName":"div"},"03698293-9BC6-4DCA-9341-BF53DD951C6E-357-000004AB39184B80":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"19.7732px","Display":"inline","BackgroundImage":"linea.png","Height":"1688px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"20","Top":"-21.8903px","FontSize":"14px","Width":"799.526px","Opacity":"0.000000","TagName":"div","InnerHTML":""},"6345B03C-DF73-4098-A95F-8FC37840BB56-357-000004797C784781":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-199px","Display":"inline","BackgroundImage":"anima-37.png","ReflectionOffset":"8px","Height":"69px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"14","Top":"1301.84px","ReflectionDepth":"0.000000","Width":"70px","TagName":"div"},"A160D035-BAA9-4EC8-9AA5-F670A8FEFF08-357-0000045EE87E240B":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-423px","Display":"inline","BackgroundImage":"anima-34.png","Height":"166px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"18","Top":"1497.89px","Width":"340px","TagName":"div"},"85C172D6-EA56-4FAD-9699-7197C1E42F0F-357-0000047DB0A8C66D":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"-78px","Display":"inline","BackgroundImage":"anima-38.png","Height":"69px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"19","Top":"1545.89px","Width":"68px","TagName":"div"}},"oid":"089A9457-28B5-4843-B273-FF5D2ED4243B-1000-00000F5575141533","name":"Untitled Scene","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "info_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());
