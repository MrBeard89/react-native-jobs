import React from 'react'
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ActivityIndicator,
  RefreshControl,
} from 'react-native'

import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'

import { useCallback, useState } from 'react'

import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'

import { COLORS, icons, SIZES } from '../../constants'

import useFetch from '../../hook/useFetch'

function JobDetails() {
  const params = useGlobalSearchParams()
  const router = useRouter()

  const { data, isLoading, error, refetch } = useFetch('job-details', { job_id: params.id })

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconURL={icons.left}
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconURL={icons.share}
              dimension='60%'
              //handlePress={() => router.back()}
            />
          ),

          headerTitle: '',
        }}
      ></Stack.Screen>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {isLoading ? (
          <ActivityIndicator size='large' />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />
            <JobTabs />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails
