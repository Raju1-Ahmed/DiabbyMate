import React from 'react';
import Carousel from 'react-material-ui-carousel';
import SliderContent from './SliderContent';
import Vector from "../../../asset/service/Vector.png"
import Vector1 from "../../../asset/service/Vector (1).png"
import Ellipse5 from "../../../asset/service/Ellipse 5.png"

const CarouselSlider = () => {
    var items = [
        {
            "_id": "63c65550b6fa091a57412a89",
            "picture": "http://placehold.it/32x32",
            "name": "Lynn Johns",
            "company": "exospeed",
            "about": "Eu non duis excepteur ipsum aliqua duis velit culpa aliqua anim exercitation. Enim enim nisi irure ex elit irure enim commodo esse esse. Fugiat aliqua eu Lorem eu Lorem ut eiusmod quis sunt esse. Ea eiusmod adipisicing id magna exercitation non consequat nostrud cillum in aliqua nisi. Fugiat proident nulla sint officia laboris labore pariatur cupidatat dolor officia reprehenderit. Ipsum eu reprehenderit duis ad ex consequat. Sunt commodo magna cupidatat minim quis esse amet consequat esse nisi nulla nisi.\r\nCupidatat enim mollit nisi eiusmod tempor consequat ex consectetur laborum sunt aliquip nulla ut. Adipisicing deserunt ipsum qui anim ex excepteur incididunt consequat ex incididunt ipsum officia. Dolor consectetur fugiat magna esse cillum labore. Aliqua proident aute dolore qui nulla non duis quis fugiat.\r\nVeniam consequat ea sint deserunt esse et ullamco. Occaecat ea consequat commodo ipsum sunt exercitation duis esse incididunt. Nulla est aliquip ex nulla laborum occaecat adipisicing exercitation laboris in voluptate dolore pariatur.\r\n",
            "description": "Tempor ad ea ipsum anim sunt sint mollit cillum culpa eu. Excepteur ipsum culpa in ut proident minim ex dolor aute et anim ea. Esse consequat nulla dolor aliquip commodo nostrud consectetur. Proident mollit reprehenderit reprehenderit occaecat esse.\r\nSit excepteur nisi et non pariatur anim voluptate anim velit labore sit culpa est. Et in dolore minim minim exercitation cupidatat ullamco. Elit dolor sunt sit proident occaecat qui.\r\nNon consequat minim laborum fugiat pariatur ex aliquip. Incididunt irure aute nisi do ut incididunt minim do in ea. Cillum dolore labore ad minim ad exercitation. Officia exercitation duis aliqua ex tempor eiusmod. Sunt irure est aliquip veniam nostrud dolore anim enim. Pariatur officia culpa culpa enim aute eu nisi esse dolore sunt. Lorem dolore commodo est commodo consequat magna consequat officia culpa labore elit.\r\n"
          },
          {
            "_id": "63c65550355a12984cd5a545",
            "picture": "http://placehold.it/32x32",
            "name": "Chandra Hubbard",
            "company": "turnabout",
            "about": "Mollit cillum adipisicing occaecat fugiat irure enim fugiat labore voluptate ea. Aliquip sint culpa pariatur pariatur voluptate. Fugiat occaecat exercitation dolor dolor id reprehenderit consectetur sit ea aliquip. Quis in officia ut Lorem Lorem nulla quis esse ipsum cillum aliqua adipisicing. Aliquip sint dolore Lorem sit commodo mollit tempor dolore voluptate labore incididunt sunt. Lorem ullamco dolore deserunt laborum aliquip voluptate veniam commodo tempor qui. Mollit pariatur pariatur ex elit laborum nulla ut cupidatat ex excepteur in magna enim.\r\nSint pariatur esse occaecat esse pariatur voluptate veniam excepteur incididunt. Amet voluptate in aliqua labore amet pariatur laboris. Sit eiusmod ipsum incididunt commodo.\r\nDolore veniam quis est Lorem. Nulla fugiat ullamco nostrud dolor. Dolor ex cillum est laborum excepteur irure. Deserunt esse occaecat sit dolore culpa sint ut adipisicing mollit do mollit velit excepteur.\r\n",
            "description": "Officia deserunt nulla anim aliqua fugiat aute do esse excepteur aliquip sit deserunt. Mollit magna ut proident aliqua non culpa. Pariatur id ex do veniam.\r\nMagna tempor commodo sunt incididunt Lorem cupidatat. Consequat cupidatat pariatur incididunt aute sint dolore. Ex irure labore fugiat consectetur adipisicing. Enim fugiat eiusmod elit Lorem sit dolor. Culpa Lorem dolor nostrud pariatur nisi labore tempor est anim ut sint.\r\nDolore duis laboris aute voluptate culpa officia in eu do. Consequat culpa ex laborum non ut. Mollit ad amet aute sit est dolor enim magna nostrud aliquip labore fugiat ex. Tempor nisi dolor eu occaecat ea proident. Laborum anim et labore mollit dolore.\r\n"
          },
          {
            "_id": "63c6555082a841883d1fee8a",
            "picture": "http://placehold.it/32x32",
            "name": "Rochelle Larson",
            "company": "zillactic",
            "about": "Cupidatat aliquip eiusmod ad ut dolore pariatur adipisicing. Nisi mollit excepteur mollit elit exercitation est laboris occaecat commodo ad qui Lorem Lorem aliquip. Velit officia amet nostrud veniam duis. Anim occaecat reprehenderit eu consectetur aute eiusmod consectetur voluptate qui fugiat elit.\r\nVeniam proident minim cillum nisi qui. Quis est dolor esse enim dolor laboris veniam anim culpa id qui esse eiusmod. Duis velit ad sint nisi duis quis Lorem quis in ullamco aliqua sint commodo.\r\nAd ullamco sint veniam mollit laborum ex excepteur qui esse. Reprehenderit deserunt mollit ex labore ad culpa do anim nisi eiusmod ullamco cupidatat id aute. Excepteur consectetur aliquip duis consequat reprehenderit ex irure laboris.\r\n",
            "description": "Et anim ad enim do aliquip excepteur laboris veniam aliquip commodo voluptate in ullamco irure. Nisi do quis mollit cillum exercitation. Culpa exercitation Lorem reprehenderit aute cupidatat tempor do.\r\nDo quis ullamco nostrud nulla irure deserunt excepteur laboris aute. Ipsum laboris eiusmod voluptate dolore ut proident. Irure consectetur mollit sit qui est.\r\nVelit tempor velit ad magna sit laboris occaecat irure nulla. Magna sint et consequat consectetur non commodo exercitation sint quis. Cupidatat deserunt consectetur id in in laboris exercitation consectetur sint ea. Amet esse excepteur amet tempor laborum culpa cupidatat voluptate eiusmod nostrud esse commodo do.\r\n"
          },
          {
            "_id": "63c6555014fb386caae4c960",
            "picture": "http://placehold.it/32x32",
            "name": "Clemons Lara",
            "company": "furnafix",
            "about": "Pariatur proident culpa adipisicing aute. Nulla veniam consectetur consequat elit proident. Sint aute laborum consequat cupidatat enim voluptate ad laborum irure eu consectetur.\r\nUt sit anim magna dolore aute. Sint eu elit quis laborum irure exercitation mollit. Ut reprehenderit nisi amet proident consequat.\r\nConsectetur dolor consequat minim irure ullamco dolore voluptate nulla sint ad. Ex veniam in elit aliquip do ad tempor voluptate id incididunt cupidatat. Reprehenderit consectetur qui velit qui deserunt. Officia dolore laboris magna tempor proident pariatur laborum elit do do nostrud sunt qui dolore. Sint anim ea labore dolore exercitation. Sunt magna excepteur anim minim cupidatat voluptate nostrud aliqua consequat ex officia.\r\n",
            "description": "Eu qui aute nisi enim ad in quis tempor laboris nulla veniam adipisicing voluptate id. Exercitation in esse sint do irure tempor irure incididunt labore velit. Aliqua ea Lorem ullamco mollit laborum pariatur. Proident occaecat esse ad eu nulla irure est cupidatat velit adipisicing minim.\r\nElit occaecat aliqua ullamco excepteur. Elit laboris quis voluptate aliqua esse cupidatat. Dolore eiusmod eu sunt sint incididunt labore esse aute. Cillum tempor sint esse id enim veniam nisi cupidatat reprehenderit fugiat consectetur occaecat Lorem est.\r\nEx et nisi amet sint ea et duis non. Incididunt incididunt duis enim reprehenderit aliqua et consequat occaecat officia pariatur. Exercitation ullamco amet elit culpa sint occaecat sit laborum quis esse exercitation esse. Do duis et voluptate eu officia sunt ea tempor velit ea quis.\r\n"
          },
          {
            "_id": "63c65550deda64cf3e63ee71",
            "picture": "http://placehold.it/32x32",
            "name": "Cote Haynes",
            "company": "qiao",
            "about": "Aliquip id id ut laborum ullamco eu. Minim adipisicing cupidatat minim elit Lorem officia ea. Aute laborum amet eu deserunt labore cupidatat anim mollit. Dolore aute occaecat sunt excepteur proident veniam.\r\nAmet eu deserunt do ut aute est magna nulla ullamco anim proident id ipsum deserunt. Dolore sunt do consectetur Lorem adipisicing non ut. Ea mollit aliqua fugiat culpa adipisicing cillum ipsum tempor. Sunt consectetur dolor sint aute incididunt quis nisi nisi velit est. Excepteur ullamco culpa officia minim culpa velit ullamco quis reprehenderit mollit. Ad mollit magna deserunt aliquip sint ea incididunt anim laborum dolore eiusmod. Sint commodo aliqua laboris pariatur ea laborum ut Lorem exercitation dolor exercitation exercitation consectetur.\r\nProident in exercitation tempor eiusmod excepteur aute aute. Enim minim adipisicing occaecat pariatur ullamco qui deserunt esse eiusmod aliquip. Non voluptate consectetur elit eu sint nostrud adipisicing veniam in tempor nostrud nisi aute duis. Id tempor aute et ea ullamco incididunt officia cillum labore cillum. Ut laborum nisi reprehenderit eu adipisicing do commodo laborum culpa non mollit consequat.\r\n",
            "description": "Esse non et ad ipsum est cillum ea duis ad ipsum officia. Incididunt officia nisi consequat ipsum occaecat sint nostrud laboris occaecat pariatur ullamco reprehenderit. Amet do ea voluptate tempor. Reprehenderit ipsum id aliquip in ex cupidatat ex dolore ut do est. Amet magna minim adipisicing incididunt. Aliqua fugiat dolore eu ea amet do officia Lorem. Laboris ex occaecat minim veniam nostrud deserunt laboris eiusmod.\r\nAliqua occaecat id Lorem cupidatat. Elit ullamco in sunt nostrud ex sint velit dolore laboris. Do consequat proident enim fugiat. Dolore qui officia aute deserunt reprehenderit ex aute. Sint incididunt nisi elit qui.\r\nCupidatat amet id exercitation magna mollit amet consequat fugiat laboris cupidatat quis aliqua nulla. Elit nisi ea et cupidatat laboris enim. Nisi quis anim deserunt in cupidatat aute laborum laborum fugiat eu deserunt adipisicing esse est. Cupidatat velit cillum pariatur exercitation. Eiusmod sint nisi anim cupidatat dolore laborum ex laboris non culpa magna.\r\n"
          },
          {
            "_id": "63c6555038177e9157288cb3",
            "picture": "http://placehold.it/32x32",
            "name": "Ross Gay",
            "company": "sunclipse",
            "about": "Lorem dolore irure ipsum sit labore consequat. Nostrud magna eiusmod est eu eiusmod. Ullamco ea aliqua ea voluptate elit reprehenderit ea veniam deserunt reprehenderit labore. Laboris aliqua nulla minim cillum labore et laborum exercitation duis ad.\r\nDuis sint veniam consequat nulla. Aliquip laboris veniam ea proident proident eu amet culpa cupidatat ad reprehenderit laborum quis culpa. Do cillum veniam proident est aliquip consequat non nisi irure incididunt deserunt. Proident laboris nostrud reprehenderit ut ullamco in labore sunt. Officia pariatur fugiat ipsum sit.\r\nVoluptate mollit occaecat cillum ex aute do ex est et. Aliquip velit deserunt aliqua nulla aliqua irure reprehenderit. Proident voluptate aliquip commodo consectetur pariatur elit consequat incididunt aliqua ad non officia incididunt elit. Consequat tempor occaecat labore do minim sit nisi id veniam veniam ad. Ut enim anim sit exercitation. Qui occaecat duis pariatur excepteur sunt reprehenderit non. Esse anim eu adipisicing Lorem amet consequat ut consectetur consectetur pariatur.\r\n",
            "description": "Labore est cupidatat cupidatat dolor magna sunt qui minim nostrud aliquip nisi ad laboris Lorem. Ullamco aliquip reprehenderit laboris proident eu ea ex dolore. Sit consectetur enim commodo eiusmod labore non proident Lorem esse occaecat. Dolor nostrud excepteur do anim eiusmod quis nulla.\r\nIpsum sit fugiat sunt ullamco magna. Ut amet Lorem consectetur aliqua sint sunt aute voluptate. Ipsum eiusmod amet commodo proident est officia aliqua consequat ea reprehenderit sunt ea occaecat sunt. Fugiat culpa laborum magna pariatur esse cupidatat elit ad dolore pariatur id tempor adipisicing labore. Et pariatur consequat id nulla sunt culpa aute tempor. Amet Lorem quis tempor aliquip. Officia aute anim qui consequat nisi cupidatat cillum est est consequat velit veniam aliqua proident.\r\nExcepteur duis est in duis dolor occaecat elit duis. In proident culpa adipisicing duis tempor esse veniam enim laborum tempor voluptate occaecat. Amet sit nostrud labore voluptate ut mollit ex. Anim fugiat aute sint et in esse sit eiusmod elit nostrud reprehenderit.\r\n"
          },
          {
            "_id": "63c655502a7f4cc33a526570",
            "picture": "http://placehold.it/32x32",
            "name": "Tate Rocha",
            "company": "farmex",
            "about": "In incididunt occaecat est reprehenderit ullamco ea in qui. Eu do cupidatat sit exercitation fugiat elit nostrud ullamco magna Lorem sit est incididunt reprehenderit. Minim incididunt voluptate minim do ex pariatur sint cillum adipisicing. Minim laboris ad cillum cillum.\r\nCommodo culpa qui id eu magna sint minim esse reprehenderit eiusmod quis. Elit minim aliqua est do. Pariatur et sunt sint adipisicing. Velit pariatur irure commodo voluptate nostrud exercitation cillum minim adipisicing enim aute. Velit est in sint laborum. In incididunt pariatur adipisicing labore elit pariatur quis.\r\nExcepteur veniam in incididunt sunt ea veniam magna. Et non in sit occaecat adipisicing consequat ad consequat officia. Irure ad ex Lorem deserunt laboris est in in non. Lorem aliqua dolor consectetur magna cupidatat amet aute.\r\n",
            "description": "Ut dolor officia tempor tempor ad excepteur adipisicing veniam ex. Cillum sint ipsum esse nulla est. Proident proident cillum culpa adipisicing dolor enim veniam qui esse eu minim voluptate. Reprehenderit nulla occaecat id et in ut excepteur ad. Minim ex cillum reprehenderit nulla occaecat mollit magna sint et pariatur. Eiusmod sit ad nostrud consectetur mollit quis consequat. Irure voluptate esse excepteur anim veniam nulla voluptate exercitation velit non magna.\r\nExercitation non ipsum sunt elit id quis incididunt quis do dolor mollit. Elit labore nulla id aliqua nulla tempor consequat do quis velit ad sit aliqua. Ad sint cillum in ea reprehenderit eu ut laboris veniam quis aliquip.\r\nAute consectetur ullamco commodo officia ipsum. Duis eiusmod dolore eiusmod magna ex sint fugiat veniam. Duis veniam laboris consectetur et. Laborum dolore pariatur eiusmod reprehenderit ut proident reprehenderit. Occaecat quis ullamco ut cupidatat minim culpa officia. Veniam aute ipsum sint culpa minim aute deserunt qui proident sit commodo. Adipisicing fugiat dolore nisi cupidatat exercitation.\r\n"
          }
    ]
    return (
        <div style={{ background: '#F6FFFB' , }} >
            <Carousel
            
            NextIcon={
            <div >
                <img src={Ellipse5} className='w-full'/>
                <img src={Vector} className='vactor' />
                </div>
            }
            PrevIcon={
                <div >
                <img src={Ellipse5} className='w-full'/>
                <img src={Vector1} className='vactor' />
                </div>
            }
            >
                {
                    items.map((item, i) => <SliderContent key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default CarouselSlider;