@tailwind base;
@tailwind components;
@tailwind utilities;


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
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Alert, AlertDescription } from './components/ui/alert';

const RoverDashboard = () => {
  const [currentMission, setCurrentMission] = useState('science');

  const systemStatus = {
    battery: 85,
    signalStrength: 92,
    temperature: 38,
    speed: 0.5,
    elevation: 1420
  };

  const baseCardStyle = "bg-gray-900/50 border-gray-800 shadow-xl backdrop-blur-sm";
  const cardBgStyle = "bg-gray-800/30 rounded-xl border border-gray-700/50 p-4";
  const buttonStyle = "p-2 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-cyan-900/50 hover:text-cyan-300 transition-all duration-300";

  const NavigationCard = () => (
    <Card className={`col-span-3 ${baseCardStyle}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-cyan-400">
          <MapPin className="h-6 w-6" />
          Navigation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 h-[400px] bg-gray-800/50 rounded-xl border border-gray-700/50 p-4 flex items-center justify-center text-gray-400">
            Map Visualization
          </div>
          <div className="space-y-6">
            <div className={cardBgStyle}>
              <div className="text-gray-400 text-sm">Current Position</div>
              <div className="font-mono text-cyan-300 text-lg mt-1">38°24'30"N 110°47'20"W</div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="text-gray-400 text-sm">Elevation</div>
                  <div className="font-mono text-cyan-300">{systemStatus.elevation} m</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Speed</div>
                  <div className="font-mono text-cyan-300">{systemStatus.speed} m/s</div>
                </div>
              </div>
            </div>
            <div className={cardBgStyle}>
              <div className="text-gray-400 text-sm mb-2">Navigation Controls</div>
              <div className="grid grid-cols-2 gap-2">
                {['Forward', 'Reverse', 'Left', 'Right'].map((control) => (
                  <button key={control} className={buttonStyle}>
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
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-emerald-400">
          <Shield className="h-6 w-6" />
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { icon: Battery, label: 'Battery', value: systemStatus.battery, suffix: '%' },
            { icon: Radio, label: 'Signal', value: systemStatus.signalStrength, suffix: '%' },
            { icon: Thermometer, label: 'Temp', value: systemStatus.temperature, suffix: '°C' }
          ].map((item) => (
            <div key={item.label} className={cardBgStyle}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-300">{item.label}</span>
                </div>
                <div className="text-lg font-medium text-emerald-400">
                  {item.value}{item.suffix}
                </div>
              </div>
              <div className="h-1.5 bg-gray-700/50 rounded-full">
                <div 
                  className="h-1.5 bg-emerald-400 rounded-full transition-all duration-300"
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
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-400">
          <Clock className="h-6 w-6" />
          Mission Control
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {['Science Mission', 'Delivery Mission', 'Equipment Servicing'].map((mission) => (
            <button
              key={mission}
              className={`p-4 rounded-xl transition-all duration-300 border ${
                currentMission === mission.toLowerCase().split(' ')[0]
                  ? 'bg-purple-900/50 text-purple-300 border-purple-700'
                  : 'bg-gray-800/50 text-gray-400 border-gray-700/50 hover:bg-purple-900/30'
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
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-400">
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
            <div key={member.name} className={`${cardBgStyle} flex items-center gap-2`}>
              <div className={`w-2 h-2 ${member.color} rounded-full`}></div>
              <div className="text-gray-300">{member.name} - {member.status}</div>
            </div>
          ))}
          <button className="w-full mt-4 p-2 bg-red-900/30 text-red-400 rounded-lg border border-red-700/30 hover:bg-red-900/50 transition-all duration-300 flex items-center justify-center gap-2">
            <Bell className="h-4 w-4" />
            Request Runner
          </button>
        </div>
      </CardContent>
    </Card>
  );

  const CameraFeeds = () => (
    <Card className={`col-span-3 ${baseCardStyle}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-400">
          <Camera className="h-5 w-5" />
          Camera Feeds
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {['Main Camera', 'Arm Camera', 'Navigation Camera'].map((camera) => (
            <div key={camera} className="aspect-video bg-gray-800/50 rounded-xl border border-gray-700/50 flex items-center justify-center text-gray-400">
              {camera}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {['Zoom +', 'Zoom -', 'Pan Left', 'Pan Right'].map((control) => (
            <button key={control} className={buttonStyle}>
              {control}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const ScienceData = () => (
    <Card className={`col-span-2 ${baseCardStyle}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-teal-400">
          <Database className="h-5 w-5" />
          Science Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className={cardBgStyle}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-gray-400 text-sm">Soil Moisture</div>
                <div className="text-lg font-medium text-teal-400">32%</div>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Soil Temperature</div>
                <div className="text-lg font-medium text-teal-400">28°C</div>
              </div>
            </div>
          </div>
          <div className={cardBgStyle}>
            <div className="text-gray-400 text-sm mb-2">Sample Analysis</div>
            <div className="space-y-2">
              <div className="font-mono text-teal-400">pH: 7.2</div>
              <div className="font-mono text-teal-400">Organic Content: Medium</div>
              <div className="font-mono text-teal-400">Mineral Content: High</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const Environmental = () => (
    <Card className={`${baseCardStyle}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-400">
          <Wind className="h-5 w-5" />
          Environmental
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { label: 'Wind Speed', value: '15 km/h' },
            { label: 'Temperature', value: '35°C' },
            { label: 'Dust Level', value: 'Moderate' }
          ].map((item) => (
            <div key={item.label} className={cardBgStyle}>
              <div className="text-gray-400 text-sm">{item.label}</div>
              <div className="text-lg font-medium text-yellow-400 mt-1">{item.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Rover Dashboard
          </h1>
          <Alert className="w-auto bg-yellow-950/30 border-yellow-600/20 text-yellow-500">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              High wind conditions detected
            </AlertDescription>
          </Alert>
        </div>

        <div className="grid grid-cols-4 gap-6">
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