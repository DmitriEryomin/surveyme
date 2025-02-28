import React, {useEffect} from 'react';
import {Alert, FlatList, View} from 'react-native';

import {Question as QuestionType} from '../types/question';
import {Question} from '../ui/question';
import {Button, ButtonText} from '@/components/ui/button';
import {useFormContext} from 'react-hook-form';

type Props = {
  questions: QuestionType[];
};

const renderItem = ({item}: {item: QuestionType}) => {
  return <Question question={item} />;
};

const ItemSeparator = () => <View className="h-[24]" />;

const keyExtractor = (item: QuestionType) => item.id;

const ListFooter = () => {
  const {handleSubmit} = useFormContext();

  const onSubmit = (data: Record<string, string | string[]>) => {
    console.log(data);
  };

  return (
    <View style={{marginTop: 24}}>
      <Button
        onPress={handleSubmit(onSubmit)}
        size="md"
        variant="solid"
        action="primary">
        <ButtonText>Submit</ButtonText>
      </Button>
    </View>
  );
};

export const FormSurvey = ({questions}: Props) => {
  useEffect(() => {
    Alert.alert('Welcome', 'Please fill out the survey');
  }, []);
  return (
    <FlatList
      data={questions}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={ListFooter}
    />
  );
};
