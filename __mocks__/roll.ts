(global as any).Roll = jest.fn().mockImplementation(() => {
  return {
    roll: jest.fn().mockResolvedValue(null),
    evaluate: jest.fn().mockResolvedValue(null),
    toMessage: jest.fn().mockResolvedValue(null),
    create: jest.fn().mockResolvedValue(null),
    render: jest.fn().mockResolvedValue(null),
  };
});
