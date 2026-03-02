"use client";

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Battery, 
  Radio, 
  Thermometer, 
  Wind, 
  MapPin, 
  Camera, 
  Clock,
  Shield, 
  Bell,
  Database,
  Users
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const RoverDashboard = () => {
  const [currentMission, setCurrentMission] = useState('science');

  const systemStatus = {
    battery: 85,
    signalStrength: 92,
    temperature: 38,
    speed: 0.5,
    elevation: 1420
  };

  const baseCardStyle = "bg-white shadow-lg border border-gray-200";
  const cardBgStyle = "bg-gray-50 rounded-lg border border-gray-200 p-4 hover:bg-gray-100 transition-all duration-300";
  const buttonStyle = "p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-medium";

  const NavigationCard = () => (
    <Card className={`col-span-3 ${baseCardStyle}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-blue-600 text-xl">
          <MapPin className="h-6 w-6" />
          Navigation Control Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 h-[400px] bg-gray-100 rounded-lg border border-gray-200 p-4 flex items-center justify-center text-gray-600">
            Interactive Map View
          </div>
          <div className="space-y-6">
            <div className={`${cardBgStyle} space-y-4`}>
              <div className="text-gray-700 text-sm font-medium">Current Position</div>
              <div className="font-mono text-blue-600 text-lg">38°24&apos;30&quot;N 110°47&apos;20&quot;W</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-700 text-sm font-medium">Elevation</div>
                  <div className="font-mono text-blue-600">{systemStatus.elevation} m</div>
                </div>
                <div>
                  <div className="text-gray-700 text-sm font-medium">Speed</div>
                  <div className="font-mono text-blue-600">{systemStatus.speed} m/s</div>
                </div>
              </div>
            </div>
            <div className={cardBgStyle}>
              <div className="text-gray-700 text-sm font-medium mb-3">Navigation Controls</div>
              <div className="grid grid-cols-2 gap-3">
                {['Forward', 'Reverse', 'Left', 'Right'].map((control) => (
                  <button key={control} className={`${buttonStyle} hover:scale-105`}>
                    {control}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const SystemStatusCard = () => (
    <Card className={`col-span-1 ${baseCardStyle}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-green-600 text-xl">
          <Shield className="h-6 w-6" />
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {[
            { icon: Battery, label: 'Battery', value: systemStatus.battery, suffix: '%' },
            { icon: Radio, label: 'Signal', value: systemStatus.signalStrength, suffix: '%' },
            { icon: Thermometer, label: 'Temp', value: systemStatus.temperature, suffix: '°C' }
          ].map((item) => (
            <div key={item.label} className={`${cardBgStyle} hover:scale-[1.02]`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
                <div className="text-lg font-medium text-green-600">
                  {item.value}{item.suffix}
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const MissionControl = () => (
    <Card className={`col-span-2 ${baseCardStyle}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-purple-600 text-xl">
          <Clock className="h-6 w-6" />
          Mission Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {['Science Mission', 'Delivery Mission', 'Equipment Servicing'].map((mission) => (
            <button
              key={mission}
              className={`p-4 rounded-lg transition-all duration-300 border font-medium ${
                currentMission === mission.toLowerCase().split(' ')[0]
                  ? 'bg-purple-100 text-purple-700 border-purple-300'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-purple-50 hover:text-purple-600'
              }`}
              onClick={() => setCurrentMission(mission.toLowerCase().split(' ')[0])}
            >
              {mission}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const TeamComm = () => (
    <Card className={`${baseCardStyle}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-blue-600 text-xl">
          <Users className="h-5 w-5" />
          Team Communication
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { name: 'Operator 1', status: 'Active', color: 'bg-green-500' },
            { name: 'Operator 2', status: 'Active', color: 'bg-green-500' },
            { name: 'Runner 1', status: 'Standby', color: 'bg-yellow-500' }
          ].map((member) => (
            <div key={member.name} className={`${cardBgStyle} flex items-center gap-3 hover:scale-[1.02]`}>
              <div className={`w-2.5 h-2.5 ${member.color} rounded-full animate-pulse`}></div>
              <div className="text-gray-700 font-medium">{member.name} - {member.status}</div>
            </div>
          ))}
          <button className="w-full mt-4 p-3 bg-red-100 text-red-600 rounded-lg border border-red-200 hover:bg-red-200 transition-all duration-300 flex items-center justify-center gap-2 font-medium hover:scale-[1.02]">
            <Bell className="h-4 w-4" />
            Request Runner
          </button>
        </div>
      </CardContent>
    </Card>
  );

  const CameraFeeds = () => (
    <Card className={`col-span-3 ${baseCardStyle}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-orange-600 text-xl">
          <Camera className="h-5 w-5" />
          Camera Feeds
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-6">
          {['Main Camera', 'Arm Camera', 'Navigation Camera'].map((camera) => (
            <div key={camera} className="aspect-video bg-gray-100 rounded-lg border border-gray-200 p-4 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all duration-300">
              {camera}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {['Zoom +', 'Zoom -', 'Pan Left', 'Pan Right'].map((control) => (
            <button key={control} className={`${buttonStyle} hover:scale-105`}>
              {control}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const ScienceData = () => (
    <Card className={`col-span-2 ${baseCardStyle}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-teal-600 text-xl">
          <Database className="h-5 w-5" />
          Science Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className={`${cardBgStyle} hover:scale-[1.02]`}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-gray-700 text-sm font-medium">Soil Moisture</div>
                <div className="text-xl font-medium text-teal-600 mt-2">32%</div>
              </div>
              <div>
                <div className="text-gray-700 text-sm font-medium">Soil Temperature</div>
                <div className="text-xl font-medium text-teal-600 mt-2">28°C</div>
              </div>
            </div>
          </div>
          <div className={`${cardBgStyle} hover:scale-[1.02]`}>
            <div className="text-gray-700 text-sm font-medium mb-3">Sample Analysis</div>
            <div className="space-y-3">
              <div className="font-mono text-teal-600">pH: 7.2</div>
              <div className="font-mono text-teal-600">Organic Content: Medium</div>
              <div className="font-mono text-teal-600">Mineral Content: High</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const Environmental = () => (
    <Card className={`${baseCardStyle}`}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-amber-600 text-xl">
          <Wind className="h-5 w-5" />
          Environmental
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {[
            { label: 'Wind Speed', value: '15 km/h' },
            { label: 'Temperature', value: '35°C' },
            { label: 'Dust Level', value: 'Moderate' }
          ].map((item) => (
            <div key={item.label} className={`${cardBgStyle} hover:scale-[1.02]`}>
              <div className="text-gray-700 text-sm font-medium">{item.label}</div>
              <div className="text-xl font-medium text-amber-600 mt-2">{item.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-800">
            Rover Dashboard
          </h1>
          <Alert className="w-auto bg-amber-50 border-amber-200 text-amber-700">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="font-medium">
              High wind conditions detected
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <NavigationCard />
          <SystemStatusCard />
          <MissionControl />
          <TeamComm />
          <CameraFeeds />
          <ScienceData />
          <Environmental />
        </div>
      </div>
    </div>
  );
};

export default RoverDashboard;