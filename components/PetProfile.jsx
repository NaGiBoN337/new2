import styled from "styled-components/native";

const Profil = styled.View`
    flex-direction: row;
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(12, 12, 12, 0.1);
    border-bottom-style: 'solid';
`;

const MyImage = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-right: 12px;
`;
const GenderImg = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 20px;
`;
const ProfDetails = styled.View`
    justify-content: center;
 
`;
const Name = styled.Text`
   font-size: 30px;
   
`;
const Age = styled.Text`
   font-size: 20px;
`;


// export const PetProfile = ({name,age, gender, frofileImg}) =>{
export const PetProfile = (props) =>{
    return(
    
    <Profil>          
            <MyImage source={props.post.frofileImg}></MyImage>
            <ProfDetails>
                <Name>{props.post.name}</Name>
                <Age> Age: {props.post.age}</Age>
                <GenderImg source={props.post.gender}></GenderImg>
            </ProfDetails>
    </Profil>
    );
}
